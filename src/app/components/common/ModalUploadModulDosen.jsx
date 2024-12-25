'use client'

import React, { useRef, useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { uploadModul } from '../../services/modulServices';
import Swal from 'sweetalert2';

const ModalUploadModulDosen = ({ idMatakuliah, fetchMatakuliahById }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [pertemuan, setPertemuan] = useState('');
  const [matakuliahId, setMatakuliahId] = useState('');
  const [file, setFile] = useState('');
  const modulRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !pertemuan || !file) {
      modulRef.current.close();
      Swal.fire('Error', 'Semua field harus diisi', 'error');
      return;
    }
    const formData = new FormData();
    formData.append('title', title);
    formData.append('pertemuanKe', pertemuan);
    formData.append('matakuliahId', idMatakuliah);
    formData.append('file', file);

    setIsLoading(true);
    try {
      const response = await uploadModul(formData);
      Swal.fire('Success', response.message, 'success');
      setTitle('');
      setPertemuan('');
      setFile('');
      modulRef.current.close();
      fetchMatakuliahById();
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
      modulRef.current.close();
    } finally {
      setIsLoading(false);
    }
  }


  const handleCancle = () => {
    modulRef.current.close();
  }
  return (
    <>
      <div className='mb-4'>
        <button className="btn bg-[#325797] hover:bg-[#2f528f] text-white" onClick={() => document.getElementById('uploadModul').showModal()}><FaRegPlusSquare size={15} />Upload Modul</button>
      </div>

      <dialog id="uploadModul" className="modal" ref={modulRef}>
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-3">Silahkan Upload Modul Disini</h3>
          <form method="dialog" onSubmit={handleSubmit}>
            {/* if there is a button in form, it will close the modal */}
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Judul
                <input type="text" className="grow" placeholder="Judul Modul" value={title} onChange={(e) => setTitle(e.target.value)} />
              </label>
            </div>
            <div className="mb-4">
              <label className="input input-bordered flex items-center gap-2">
                Pertemuan ke
                <input type="number" className="grow" placeholder="pertemuan ke" value={pertemuan} onChange={(e) => setPertemuan(e.target.value)} />
              </label>
            </div>
            <div className="mb-4">
              <input type="file" className="file-input file-input-ghost w-full" onChange={(e) => setFile(e.target.files[0])} />
            </div>

            <div className='flex justify-between gap-2'>
              <button type='button' className='btn w-52' onClick={handleCancle} >Batal</button>
              <button type='submit' className="btn w-52 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400" disabled={isLoading}>{isLoading ? 'menyimpan...' : 'Simpan'}</button>
            </div>
            {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button> */}
          </form>
        </div>
      </dialog>
    </>
  )
}

export default ModalUploadModulDosen