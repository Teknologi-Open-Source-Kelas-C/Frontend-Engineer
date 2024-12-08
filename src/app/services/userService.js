import { getCookie } from '../utils/authHelper';
import api from '../config/api';

export const getUserRoleDosen = async () => {
  try {
    const token = getCookie('token');

    if (!token) {
      console.log('Token tidak ditemukan');
      return;
    }

    const response = await api.get('/users/dosen', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error get user role dosen:', error.message);
    throw error;
  }
}

export const getAllUser = async () => {
  try {
    const token = getCookie('token');

    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error fetching all users:', error.message);
    throw error;
  }
}

export const createUser = async (nama, email, password, role) => {
  try {
    const token = getCookie('token');

    if (!token) {
      return Error('Token tidak ditemukan');
    }

    const response = await api.post('/auth/register', { nama, email, password, role },
      { headers: { 'Content-Type': 'application/json' } }
    )

    return response.data;
  } catch (error) {
    console.log('Error create user', error.message);
    throw error;
  }
}

export const getUserById = async (id) => {
  try {
    const token = getCookie('token');

    if(!token){
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error get user by id:', error.message);
    throw error;
  }
}

export const updateRoleUser = async (id, role) => {
  try {
    const token = getCookie('token');

    if(!token){
      throw new Error ('Token tidak ditemukan');
    }

    const response = await api.put(`/users/${id}`, {role}, {
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error update role user:', error.message);
    throw error;
  }
}

export const deleteUser = async (id) => {
  try {
    const token = getCookie('token');

    if(!token){
      throw new Error ('Token tidak ditemukan');
    }

    const response = await api.delete(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;

  } catch (error) {
    console.log('Error delete user:', error.message);
    throw error;
  }
}