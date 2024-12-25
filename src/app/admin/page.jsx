'use client'

import React, { useEffect, useState } from 'react'
import { getCount } from '../services/countServices'
const Page = () => {
  const [count, setCount] = useState('');

  const fetchCount = async () => {
    try {
      const response = await getCount();
      setCount(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCount();
  }, [])

  return (
    <div className='flex flex-col py-10'>
      <h1 className='text-2xl font-bold ml-10 mb-10'>Dashboard Admin</h1>
      <div className="flex flex-wrap gap-10 justify-around items-satart">
        <div className="w-[45%] h-[10em] bg-blue-700 rounded-lg">
          <div className='flex flex-col p-4 text-white'>
            <h2 className='mb-2 font-bold text-2xl'>Total Pengguna</h2>
            <p className='text-2xl font-bold'>{count.pengguna} Orang</p>
          </div>
        </div>
        <div className="w-[45%] h-[10em] bg-blue-700 rounded-lg">
          <div className='flex flex-col p-4 text-white'>
            <h2 className='mb-2 font-bold text-2xl'>Total Mahasiswa</h2>
            <p className='text-2xl font-bold'>{count.mahasiswa} Orang</p>
          </div>
        </div>
        <div className="w-[45%] h-[10em] bg-blue-700 rounded-lg">
          <div className='flex flex-col p-4 text-white'>
            <h2 className='mb-2 font-bold text-2xl'>Total Dosen</h2>
            <p className='text-2xl font-bold'>{count.dosen} Orang</p>
          </div>
        </div>
        <div className="w-[45%] h-[10em] bg-blue-700 rounded-lg">
          <div className='flex flex-col p-4 text-white'>
            <h2 className='mb-2 font-bold text-2xl'>Total Matakuliah</h2>
            <p className='text-2xl font-bold'>{count.matakuliah} Orang</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page