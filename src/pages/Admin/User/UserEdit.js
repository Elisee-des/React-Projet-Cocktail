import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userService } from '@/_services';


const UserEdit = () => {
   
    let {uid} = useParams();
    let navigate = useNavigate();
    console.log(uid);
    const flag = useRef(false);
    const [user, setUsers] = useState({});


    const onChange = (e) => {

    }

    const onSubmit = (e) => {
        e.preventDefault();

    }

    useEffect( ()=> {
        console.log('useEffect');

        if (flag.current === false) {
            userService.getUser(uid)
                .then((res)=> {
                    console.log(res.data.data)
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err));
        }

            return () => flag.current = true;
    },[])

    const handlRetour = () => {
        navigate('/');
    }

    return (
        <div className='UserEdit'>
            Edit User !!
            <div className='Login'>
            <h3 className='inscipt-form'>Edition de </h3>
            <form action="">
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name='nom' value={user.email} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" name='prenom' value={user.password} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="pseudo">Pseudo</label>
                    <input type="text" name='pseudo' value={user.pseudo} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name='email' value={user.email} onChange={onChange} />
                </div>
                <div className="group">
                    <button>Connexion</button>
                    <button onClick={() => handlRetour()}>Retour</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UserEdit;