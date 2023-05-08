import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    const [credentials, setCredential] = useState({
        login: 'Elisee',
        password: '0190'
    });

    const onChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setCredential({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
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
                    <input type="text" name='login' value={credentials.login} onChange={onChange} />
                </div>
                <div className="group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="text" name='password' value={credentials.password} onChange={onChange} />
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