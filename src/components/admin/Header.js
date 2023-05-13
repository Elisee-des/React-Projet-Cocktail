import React from 'react';
import { accountService } from '@/_services/account.service';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    let navigate = useNavigate();

    const onClick = () => {
        accountService.logout();
        navigate('/home');
    }

    return (
        <div className='AHeader'>
            Header Admin !
            <button onClick={onClick} >Logout</button>
        </div>
    );
};

export default Header;