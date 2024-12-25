import Cookies from 'js-cookie';

/**
 * Mengambil nilai cookie tertentu.
 * @param {string} name - Nama cookie.
 * @returns {string | null} Nilai cookie atau null jika tidak ditemukan.
 */
export const getCookie = (name) => {
  return Cookies.get(name) || null;
};

/**
 * Mengecek apakah user sudah login.
 * @returns {boolean} True jika token ada, false jika tidak.
 */
export const isLoggedIn = () => !!Cookies.get('token');

/**
 * Mengambil role user dari cookie.
 * @returns {string | null} Role user atau null jika tidak ditemukan.
 */
export const getRole = () => Cookies.get('userRole');

/**
 * Mengambil username dari cookie.
 * @returns {string | null} Username atau null jika tidak ditemukan.
 */
export const getUsername = () => Cookies.get('username');

/**
 * Menghapus semua cookie terkait login (logout).
 */
export const logout = () => {
  Cookies.remove('token', { path: '/' });
  Cookies.remove('userRole', { path: '/' });
  Cookies.remove('username', { path: '/' });
};
