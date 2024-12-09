'use client'

import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import React, { useState } from 'react'
import { login } from '../../services/authServices'
import { getRole } from '../../utils/authHelper'
import { FaEnvelope, FaKey } from "react-icons/fa";

const loginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleUser, setRoleUser] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password, roleUser);
      document.cookie = `token=${data.token}; path=/;`;
      document.cookie = `username = ${data.user.nama}; path=/;`;
      document.cookie = `userRole = ${data.user.role}; path=/;`;


      const role = getRole();
      if (role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard')
      }
      Swal.fire('Success', 'Login successful', 'success');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  }
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-white px-4 md:px-8'>
      <div className="flex flex-col md:flex-row bg-white rounded-3xl border shadow-lg overflow-hidden max-w-4xl w-full md:h-[556px]">
        <div className="flex flex-col justify-center p-8 w-full md:w-1/2 space-y-6 bg-white">
          <h2 className="text-2xl font-bold text-black">Hello, welcome</h2>
          <form onSubmit={handleLogin} className='flex flex-col'>
            <div className='mb-5'>
              <label className="input input-bordered flex items-center gap-2">
                <FaEnvelope className='h-4 w-4 opacity-70' />
                <input type="email" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </label>
            </div>
            <div className='mb-5'>
              <label className="input input-bordered flex items-center gap-2">
                <FaKey className='h-4 w-4 opacity-70' />
                <input type="password" className="grow" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </label>
            </div>

            {/* dropdown */}
            <div className='w-full mb-4'>
              <select className="select select-bordered w-full" value={roleUser} onChange={(e) => setRoleUser(e.target.value)} required>
                <option value="" disabled >Pilih Role</option>
                <option value="admin">Admin</option>
                <option value="dosen">Dosen</option>
                <option value="mahasiswa">Mahasiswa</option>
              </select>
            </div>
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full">Login</button>
          </form>


          <div className="flex justify-between mt-4 text-gray-600 text-sm">
            <a href="#" className="text-blue-800 hover:underline"></a>
            <p>Don't have an account? <span onClick={() => router.push('/register')} className="text-blue-800 hover:underline cursor-pointer">Create</span></p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-blue-200 bg-opacity-40">
          <img src="./images/login.png" alt="Image" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default loginPage