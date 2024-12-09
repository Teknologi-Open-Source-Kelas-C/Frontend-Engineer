'use client'
import React, { useEffect, useState } from 'react'
import LastSeen from './components/LastSeen'
import ListMatakuliahMahasiswa from './components/ListMatakuliahMahasiswa'
import ListMatakuliahDosen from './components/ListMatakuliahDosen'
import { fetchMatakuliah } from '../services/matakuliahService'
import Skeleton from '../components/common/Skeleton'
import { getCookie } from '../utils/authHelper'

const dashboardPage = () => {

  const role = getCookie('userRole');
  return (
    <div className='container mx-auto p-4'>
      <LastSeen />
      

      {role === 'dosen' ? <ListMatakuliahDosen /> : <ListMatakuliahMahasiswa />}
      {/*  */}
      
    </div>
  )
}

export default dashboardPage