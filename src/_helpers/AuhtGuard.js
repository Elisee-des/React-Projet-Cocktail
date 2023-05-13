import React from 'react';
import { Navigate } from 'react-router-dom';
import { accountService } from '@/_services/account.service';

const AuhtGuard = ({ children }) => {

    if(!accountService.isLogged())
    {
        return <Navigate to="/auth/login" />
    }

    return children;
};

export default AuhtGuard;