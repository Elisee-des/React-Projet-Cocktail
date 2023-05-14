import Axios from './caller.service'

let getAllUsers = () => {
    return Axios.get('/users');
}

let getUser = (idUser) => {
    return Axios.get('users/'+idUser);
}

export const userService = { getUser, getAllUsers}