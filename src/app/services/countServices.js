import api from '../config/api';
const {getCookie} = require('../utils/authHelper');

export const getCount = async () => {
    try {
        const token = getCookie('token');

        if(!token){
            throw new Error('Token tidak ditemukan');
        }

        const response = await api.get('/count', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.log('Error fetching count:', error.message);
        throw error;
    }
};