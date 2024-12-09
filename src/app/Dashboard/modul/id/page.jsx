'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getMatakuliahById } from '../../../services/matakuliahService'
import { downloadModul, readModul } from '../../../services/modulServices'
import Swal from 'sweetalert2'
import ModulList from '../../components/ModulList'
import { MdInfoOutline } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { getCookie } from '../../../utils/authHelper'
import ModalUploadModulDosen from '../../../components/common/ModalUploadModulDosen'
import Loading from '../../../components/common/Loading'

const page = () => {
  const { id } = useParams();
  const [matakuliah, setMatakuliah] = useState(null);
  const [listDosen, setListDosen] = useState([]);
  const [listModul, setListModul] = useState([]);
  const role = getCookie('userRole');

  const fetchMatakuliahById = async () => {
    try {
      const response = await getMatakuliahById(id);
      setMatakuliah(response.data);
      setListDosen(response.data.dosens);
      setListModul(response.data.moduls);
    } catch (error) {
      console.log(error);
    }
  }

  const handleReadModul = async (modulId) => {
    try {
      const response = await readModul(modulId);
      const url = response.data.fileUrl;
      window.open(url, '_blank');
    } catch (error) {
      Swal.fire('Error', 'Failed to open modul file', 'error');
    }
  }

  const handleDonwloadModul = async (modulId) => {
    try {
      const fileBlob = await downloadModul(modulId);

      // membuat url untuk file yang di unduh
      const url = window.URL.createObjectURL(new Blob([fileBlob]));
      const link = document.createElement('a');
      link.href = url;

      // tentukan nama file dari header content-disposition
      const contentDisposition = fileBlob.headers?.['content-disposition'];
      let fileName = 'file';
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?(.+)"?/);
        if (match) {
          fileName = match[1];
        }
      }

      link.setAttribute('download', fileName); //set nama file
      document.body.appendChild(link);
      link.click();

      // hapus element jika sudah selesai
      document.body.removeChild(link);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  }

  useEffect(() => {
    fetchMatakuliahById();
  }, []);

  if (!matakuliah) {
    return (
      <Loading />
    )
  }

  return (
    <div className="mx-auto my-10 p-4 w-4/6">
      <div className="bg-cover bg-center rounded-lg shadow-md p-10 mb-4 h-64 border border-black relative" style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <div className="text-center mt-auto md:text-left w-full md:w-auto">
          <h1 className="font-bold text-white text-2xl sm:text-4xl md:text-5xl lg:text-5xl">{matakuliah.nama}</h1>
          <p className="text-white text-lg">Semester {matakuliah.semester}</p>
        </div>

        <div className='dropdown dropdown-top dropdown-end absolute bottom-4 right-4'>
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
            <MdInfoOutline size={15} className='text-white' />
          </div>
          <div
            tabIndex={0}
            className="card compact dropdown-content bg-base-100 rounded-box z-[1] w-52 p-5 shadow">
            {listDosen && listDosen.length > 0 ? (
              <>
                <h3 className="font-semibold text- text-gray-800">Team Teaching: </h3>
                {listDosen.map((dosen, index) => (
                  <ul className="list-disc px-5 text-gray-700" key={index}>
                    <li>{dosen.nama}</li>
                  </ul>
                ))}
              </>
            ) : (
              <ul className="list-disc px-5 text-gray-700">
                <li>tidak ada dosen</li>
              </ul>
            )}
          </div>
        </div>
      </div>
      {role === 'dosen' && (
        <ModalUploadModulDosen idMatakuliah={matakuliah.id} fetchMatakuliahById={fetchMatakuliahById} />
      )}

      {listModul && listModul.length > 0 ? (
        <div className=''>
          {listModul.map((modul, index) => (
            <ModulList modul={modul} handleReadModul={handleReadModul} key={index} handleDonwloadModul={handleDonwloadModul} role={role} fetchMatakuliahById={fetchMatakuliahById} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-3 mb-4 border border-black">
          <h1 className='text-center font-semibold'>Belum ada modul yang diupload</h1>
        </div>
      )}
    </div>
  )
}

export default page