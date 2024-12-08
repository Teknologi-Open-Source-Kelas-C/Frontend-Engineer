'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '../components/layout/admin/Navbar'
import Sidebar from '../components/layout/admin/Sidebar'
import { getCookie } from '../utils/authHelper'


const DasboardLayout = ({ children }) => {
  const [username, setUsername] = useState('');
  const [isOpen, setIsOpen] = useState(true);

  const getUsername = getCookie('username');

  useEffect(() => {
    setUsername(getUsername);
  }, []);

  return (
    <>
      <Navbar role={username} setIsOpen={setIsOpen} isOpen={isOpen} />

      <div className='flex'>
        <div
          className={`${isOpen ? 'block' : 'hidden'
            } md:block transition-all duration-300`}>
          <Sidebar />
        </div>

        <div className='w-full'>
          {children}
        </div>
      </div>
    </>
  )
}

export default DasboardLayout