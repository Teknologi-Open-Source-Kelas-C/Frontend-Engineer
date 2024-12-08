import { getCookie } from '../utils/authHelper';
import api from '../config/api';

export const fetchMatakuliah = async () => {
  try {
    const token = getCookie('token');


    if (!token) {
      console.log('Token tidak ditemukan');
    }

    const response = await api.get('/matakuliah', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error fetching matakuliah:', error.message);
    throw error;
  }
}

export const fetchMatakuliahDosen = async () => {
  try {
    const token = getCookie('token');

    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.get('/matakuliah/dosen', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data;
  } catch (error) {
    
  }
}

export const getMatakuliahById = async (id) => {
  try {
    const token = getCookie('token');
    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.get(`/matakuliah/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error mengambil detail matakuliah:', error.message);
    throw error;
  }
}

export const addMatakuliah = async (data) => {
  try {
    const token = getCookie('token');

    if(!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.post('/matakuliah', data, {
      headers: {
        "Content-Type" : 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error create new matakuliah:', error.message);
    throw error;
  }
}

export const updateMatakuliah =  async(id, data) => {
  try {
    const token = getCookie('token'); 

    if(!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.put(`/matakuliah/${id}`, data, {
      headers: {
        "Content-Type" : 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error update matakuliah:', error.message);
    throw error;
  }
}

export const deleteMatakuliah = async (id) => {
  try {
    const token = getCookie('token');

    if(!token){
      console.log('Token tidak ditemukan');
      return; 
    }

    const response = await api.delete(`/matakuliah/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.log('Error delete matakuliah:', error.message);
    throw error;
  }
}