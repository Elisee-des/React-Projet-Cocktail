import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userService } from '@/_services';


const UserEdit = () => {
   
    const {uid} = useParams();
    let navigate = useNavigate();
    const flag = useRef(false);
    const [user, setUser] = useState([]);


    const onChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        userService.updateUser(user)
            .then(res => {
                navigate('../index')
            })
            .catch(err => console.log(err));
    }

    useEffect( ()=> {
        console.log('useEffect');

        if (flag.current === false) {
            userService.getUser(uid)
                .then((res)=> {
                    console.log(res.data.data)
                    setUser(res.data.data)
                })
                .catch(err => console.log(err));
        }

        return () => flag.current = true;
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const handlRetour = () => {
        navigate('/');
    }

    return (
        <div className='UserEdit'>
            Edit User !!
            <div className='Login'>
            <h3 className='inscipt-form'>Edition de </h3>
            <form action="" onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name='nom' value={user.nom} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" name='prenom' value={user.prenom} onChange={onChange} />
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
                    <button>Modifier</button>
                    <button onClick={() => handlRetour()}>Retour</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default UserEdit;