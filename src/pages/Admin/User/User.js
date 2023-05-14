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