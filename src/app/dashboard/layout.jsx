'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/layout/Navbar'
import { getCookie } from '../utils/authHelper'
import { FilterProvider } from '../contexts/FileFilterContext'


const DasboardLayout = ({ children }) => {
  const [username, setUsername] = useState('');

  const getUsername = getCookie('username');

  useEffect(() => {
    setUsername(getUsername);
  }, []);

  return (
    <FilterProvider>

      <Navbar username={username} />

      <div>
        {children}
      </div>
    </FilterProvider >
  )
}

export default DasboardLayout
