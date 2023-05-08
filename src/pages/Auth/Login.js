import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    const [login, setLogin] = useState('Elisee');
    const [password, setPassword] = useState('Password');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Mon formulaire");
        console.log(login, password);
    }

    const handlRetour = () => {
        navigate('../home');
    }

    return (
        <div className='Login'>
            <h3 className='inscipt-form'>Formulaire de connexion</h3>
            <form action="" onSubmit={onSubmit}>
                <div className="group">
                    <label htmlFor="login">Identification</label>
                    <input type="text" name='login' value={login} onChange={(e) => setLogin(e.target.value)} />
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name='password' value={password} onChange={e=>setPassword(e.target.value)} />
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