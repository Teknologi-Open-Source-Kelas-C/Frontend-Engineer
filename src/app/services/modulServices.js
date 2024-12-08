import { getCookie } from '../utils/authHelper';
import api from '../config/api';

export const readModul = async (moduLId) => {
  try {
    const token = getCookie('token');

    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.get(`/modul/${moduLId}/read`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response;
  } catch (error) {
    console.log('Error load modul:', error.message);
    throw error;
  }
}

export const downloadModul = async (modulId) => {
  try {
    const token = getCookie('token');

    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.get(`/modul/${modulId}/download`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    })

    return response.data;
  } catch (error) {
    console.log('Error download modul:', error.message);
    throw error;
  }
}

export const uploadModul = async (data) => {
  try {
    const token = getCookie('token');

    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.post('/modul', data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    // Jika error berasal dari response backend
    if (error.response) {
      // Error dari backend (misalnya file terlalu besar, atau tipe file tidak valid)
      throw new Error(error.response.data.message || 'Terjadi kesalahan saat upload modul');
    }

    // Jika error karena jaringan atau server tidak responsif
    if (error.request) {
      throw new Error('Tidak ada respon dari server, silakan coba lagi');
    }

    // Error lainnya
    throw new Error(error.message || 'Terjadi kesalahan saat upload modul');
  }
}

export const deleteModul = async (idModul) => {
  try {
    const token = getCookie('token');

    if (!token) {
      throw new Error('Token tidak ditemukan');
    }

    const response = await api.delete(`/modul/${idModul}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data;
  } catch (error) {
    console.log('Error delete modul:', error.message);
    throw error;
  }
}