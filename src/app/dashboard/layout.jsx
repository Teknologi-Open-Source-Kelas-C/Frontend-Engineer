'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/layout/Navbar'
import { getCookie } from '../utils/authHelper'


const DasboardLayout = ({ children }) => {
  const [username, setUsername] = useState('');

  const getUsername = getCookie('username');

  useEffect(() => {
    setUsername(getUsername);
  }, []);
  
  return (
    <div>
      <Navbar username={username}/>

      <div>
        {children}
      </div>
    </div>
  )
}

export default DasboardLayout
