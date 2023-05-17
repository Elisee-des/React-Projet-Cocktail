import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { userService } from '@/_services';

const User = () => {

    const [users, setUsers] = useState([]);
    const flag = useRef(false);

    // let navigate = useNavigate();

    useEffect( ()=> {
        console.log('useEffect');

        if (flag.current === false) {
            userService.getAllUsers()
                .then((res)=> {
                    console.log(res.data.data)
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err));
        }

            return () => flag.current = true;
    },[])

    const detUser = (userId) => {
        console.log(userId)
        userService.deleteUser(userId)
            .then(res => {
                console.log(res)
                setUsers((current) => current.filter(user => user.id !== userId))
            })
            .catch(err => console.log(err))
    }

    // const marcel = (userId) => {
    //     console.log("click");
    //     navigate("../edit/"+userId);
    // }

    return (
        <div className='User'>
            User liste
            {/* <button onClick={() => marcel(4)}>Editer</button> */}
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Creation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td><span className='det_ubtn' onClick={ ()=> detUser(user.id) }>X</span></td>
                                <td><Link to={`/admin/user/edit/${user.id}`} >{user.id}</Link></td>
                                <td>{user.nom}</td>
                                <td>{user.prenom}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;