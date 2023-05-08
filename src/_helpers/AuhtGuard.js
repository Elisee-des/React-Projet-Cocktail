import React from 'react';
import { Navigate } from 'react-router-dom';

const AuhtGuard = ({ children }) => {

    let logged  = false;

    if(!logged)
    {
        return <Navigate to="/auth/login" />
    }

    return children;
};

export default AuhtGuard;