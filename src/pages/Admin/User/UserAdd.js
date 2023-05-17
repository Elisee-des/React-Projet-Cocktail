import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '@/_services/user.service';

const UserAdd = () => {

    const [user, setUser] = useState([]);

    let navigate = useNavigate();

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        userService.addUser(user)
            .then(res => {
                console.log(res)
                navigate('../index')
            })
            .catch(err => console.log(err));
    }


    const handlRetour = () => {
        navigate('/');
    }

    return (
        <div className='UserAdd'>
            Add User !!!
            <div className='Login'>
            <h3 className='inscipt-form'>Ajout d'un utilisateur </h3>
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
                    <label htmlFor="pseudo">Mot de passe</label>
                    <input type="text" name='password' value={user.password} onChange={onChange} />
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
                    <button>Créer</button>
                    <button onClick={() => handlRetour()}>Retour</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default UserAdd;