import { getCookie } from '../utils/authHelper';
import api from '../config/api';
export const getLastSeen = async () => {
  try {
    const token = getCookie('token');

    if(!token) {
      throw new Error('Token tidak ditemukan');
    }
    const response = await api.get('/lastseen', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;

  } catch (error) {
    console.log('Error fetching last seen:', error.message);
    throw error;
  }
}