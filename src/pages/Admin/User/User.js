import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '@/_services/user.service';

const User = () => {

    let navigate = useNavigate();

    useEffect( ()=> {
        userService.getAllUsers()
            .then((res)=>console.log(res.data))
            .catch(err => console.log(err))
    },[])

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