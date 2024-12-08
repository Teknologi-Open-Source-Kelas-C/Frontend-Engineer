import api from '../config/api';

export const login = async (email, password, role) => {
  try {
    const response = await api.post('/auth/login', { email, password, role });
    return response.data;
  } catch (error) {
    if(error.response && error.response.status === 401) {
      return Promise.reject(new Error('Email atau Password Salah'));
    }
    throw error;
  }
}

export const register = async (nama, email, password) => {
  if (!nama || !email || !password) {
    return Promise.reject(new Error('Semua field harus diisi'));
  }

  try {
    const response = await api.post('/auth/register',
      { nama, email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    if (!response || !response.data) {
      throw new Error('Terjadi kesalahan saat mendaftar');
    }
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return Promise.reject(new Error(error.response.data.message));
    }
    throw error;
  }
}
