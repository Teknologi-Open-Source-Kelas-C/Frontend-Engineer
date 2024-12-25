'use client'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { register } from '../../services/authServices';
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";


const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (password !== confirmPassword) {
      return Swal.fire('Error', 'Password dan confirm password harus sama', 'error');
    }

    try {
      const data = await register(nama, email, password);
      document.cookie = `token=${data.token}; path=/;`;
      document.cookie = `userRole=${data.user.role}; path=/;`;
      document.cookie = `username=${data.user.nama}; path=/;`;
      Swal.fire('Success', data.message, 'success');
      router.push('/dashboard');
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-[606px] mx-auto  shadow-lg border border-gray-300 rounded-[35px] p-8 sm:p-10 md:p-12">
        <h1 className="text-center text-black text-2xl md:text-3xl font-medium font-poppins mb-8">Silahkan Registrasi</h1>
        <form onSubmit={handleRegister}>
          <div className="space-y-6">

            <div className='mb-5'>
              <label className="input input-bordered flex items-center gap-2">
                <FaUser className='h-4 w-4 opacity-70' />
                <input type="text" className="grow" placeholder="Username" value={nama} onChange={(e) => setNama(e.target.value)} required />
              </label>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <FaEnvelope className='h-4 w-4 opacity-70' />
              <input type="email" className="grow" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <div className='mb-5'>
              <label className="input input-bordered flex items-center gap-2">
                <FaKey className='h-4 w-4 opacity-70' />
                <input type="password" className="grow" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </label>
            </div>
            <div className='mb-5'>
              <label className="input input-bordered flex items-center gap-2">
                <FaKey className='h-4 w-4 opacity-70' />
                <input type="password" className="grow" placeholder="Konfirmasi Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </label>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <button className="btn bg-blue-500 hover:bg-blue-600 text-white w-full" disabled={isLoading}>
              <p className='font-semibold text-xl'>{isLoading ? 'loading...' : 'Register'}</p>
            </button>
          </div>
        </form>
        <div className="mt-6 text-center text-sm md:text-base font-light">
          <span className="text-gray-600">Have an account?</span>
          <span onClick={() => router.push('/login')} className="text-[#1A369A] hover:underline cursor-pointer">Log in</span>
        </div>
      </div>
    </div >
  )
}

export default Register