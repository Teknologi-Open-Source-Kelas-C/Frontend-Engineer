'use client'

import React, { useEffect, useRef, useState } from 'react'
import { getUserById, updateRoleUser } from '../../../../services/userService';
import Swal from 'sweetalert2';

const EditUser = ({ userId, fetchAllUser }) => {
  const modalRef = useRef(null)
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCancle = () => {
    modalRef.current.close();
  }

  const getSingleUser = async () => {
    try {
      const response = await getUserById(userId);
      setRole(response.data.role);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  useEffect(() => {
    getSingleUser();
  }, [userId])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if(!role){
      Swal.fire('Error', 'Semua field harus diisi', 'error');
    }

    try {
      const response = await updateRoleUser(userId, role);
      modalRef.current.close();
      Swal.fire('Success', response.message, 'success');
      await fetchAllUser();
      
    } catch (error) {
      console.log(error);
      throw error;
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <dialog id="editUser" className="modal" ref={modalRef}>
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-3">Tambah Pengguna Baru</h3>
        <form method="dialog" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="mb5">
              <select className="select select-bordered w-full"
                value={role}
                onChange={(e) => setRole(e.target.value)} required>
                <option value="" disabled>Pilih role...</option>
                <option value='dosen'>Dosen</option>
                <option value='mahasiswa'>Mahasiswa</option>
              </select>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-3">
            <button type='button' className="btn btn-ghost bg-gray-300 hover:bg-gray-400  w-1/2" onClick={handleCancle}>
              Batal
            </button>
            <button type='submit' className="btn bg-blue-500 hover:bg-blue-600 text-white w-1/2" disabled={isLoading}>
              {isLoading ? 'menyimpan...' : 'Simpan'}
            </button>
          </div>
          <button type='button' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={handleCancle}>✕</button>
        </form>
      </div>
    </dialog>
  )
}

export default EditUser