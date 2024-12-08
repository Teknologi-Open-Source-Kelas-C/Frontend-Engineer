import React from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'

const ContentTable = ({ matakuliah, count, onEditHandle, handleDeleteMatakuliah }) => {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2 text-center">{count}.</td>
      <td className="border border-gray-300 px-4 py-2">{matakuliah.nama}</td>
      <td className="border border-gray-300 px-4 py-2">{matakuliah.kode}</td>
      <td className="border border-gray-300 px-4 py-2 text-center">{matakuliah.semester}</td>
      <td className="border border-gray-300 px-4 py-2">
        { matakuliah.dosens.length === 0 ? (
          <p>Tidak ada dosen</p>
        ) : (
          matakuliah.dosens.map((dosen, index) => (
            <p key={index}>{matakuliah.dosens.length > 1 ? index + 1 + '.' : ''} {dosen.nama}</p>
          ))
        )}
      </td>
      <td className="border border-gray-300 px-4 py-2 text-center">
        <button className="text-yellow-500 px-2 py-1 rounded btn bg-transparent hover:bg-transparent btn-ghost" onClick={() => onEditHandle(matakuliah.id)}>
          <FaRegEdit size={20} />
        </button>
        <button className="text-red-500 px-2 py-1 rounded btn btn-ghost hover:bg-transparent bg-transparent" onClick={() => handleDeleteMatakuliah(matakuliah.id)}>
          <FaRegTrashAlt size={20} />
        </button>
      </td>
    </tr>
  )
}

export default ContentTable