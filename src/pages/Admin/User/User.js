import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {

    let navigate = useNavigate();

    const marcel = (userId) => {
        console.log("click");
        navigate("../edit/"+userId);
    }

    return (
        <div className='User'>
            User liste
            <button onClick={() => marcel(4)}>Editer</button>
        </div>
    );
};

export default User;