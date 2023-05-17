import Axios from './caller.service'

let getAllUsers = () => {
    return Axios.get('/users');
}

let getUser = (idUser) => {
    return Axios.get('users/'+idUser);
}

let addUser = (user) => {
    return Axios.put('/users/', user);
}

let updateUser = (user) => {
    return Axios.patch('/users/'+user.id, user);
}

let deleteUser = (uid) => {
    return Axios.delete('/users/'+uid);
}


export const userService = { getUser, getAllUsers, updateUser, deleteUser, addUser}