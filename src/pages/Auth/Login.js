import React from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    const handlRetour = () => {
        navigate('../home');
    }

    return (
        <div className='Login'>
            <h3 className='inscipt-form'>Formulaire de connexion</h3>
            <form action="">
                <div className="group">
                    <label htmlFor="login">Identification</label>
                    <input type="text" name='login' />
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name='password' />
                </div>
                <div className="group">
                    <button>Connexion</button>
                    <button onClick={() => handlRetour()}>Retour</button>
                </div>
            </form>
        </div>
    );
};

export default Login;