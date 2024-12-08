import React from 'react'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'

const ContentTable = ({ user, count, onEditHandle, handleDelteUser }) => {
  return (
    <tr>
      <td className="border border-gray-300 px-4 py-2 text-center">{count}.</td>
      <td className="border border-gray-300 px-4 py-2">{user.nama}</td>
      <td className="border border-gray-300 px-4 py-2">{user.email}</td>
      <td className="border border-gray-300 px-4 py-2 text-center capitalize">{user.role}</td>
      <td className="border border-gray-300 px-4 py-2 text-center">
        <button className="text-yellow-500 px-2 py-1 rounded btn bg-transparent hover:bg-transparent btn-ghost" onClick={() => onEditHandle(user.id)}>
          <FaRegEdit size={20} />
        </button>
        <button className="text-red-500 px-2 py-1 rounded btn btn-ghost hover:bg-transparent bg-transparent" onClick={() => handleDelteUser(user.id)}>
          <FaRegTrashAlt size={20} />
        </button>
      </td>
    </tr>
  )
}

export default ContentTable