import api from './api.js';


export const fetchUsers = async () => {
    const response = await api.get('/users');
    console.log("Usuarios obtenidos:", response.data);
    return response.data;
};


export const createUser = async (userData) => {
    const response = await api.post('/users', userData);
    return response.data;
};


export const updateUser = async (id, userData) => {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
};


export const deleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`);
    return response.data;
};


export const getUserComments = async (userId) => {
    const response = await api.get(`/users/${userId}/comments`);
    return response.data;
};
