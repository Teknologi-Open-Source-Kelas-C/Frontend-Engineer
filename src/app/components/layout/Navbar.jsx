'use client';

import React from 'react'
import Button from '../common/LogoutButton'
import { FaUserCircle, FaSearch } from "react-icons/fa";
import { useRouter } from 'next/navigation';

const Navbar = ({ username }) => {
  const router = useRouter();


  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a>Semester</a>
                <ul className="p-2">
                  <li><a>Semester 1</a></li>
                  <li><a>Semester 2</a></li>
                  <li><a>Semester 3</a></li>
                  <li><a>Semester 4</a></li>
                </ul>
              </li>
            </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold" onClick={() => router.push('/dashboard')}>E-Modul</a>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Semester</summary>
                <ul className="p-2 w-36">
                  <li><a>Semester 1</a></li>
                  <li><a>Semester 2</a></li>
                  <li><a>Semester 3</a></li>
                  <li><a>Semester 4</a></li>
                </ul>
              </details>
            </li>
          </ul>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd" />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className='flex items-center gap-2 btn bg-transparent hover:bg-transparent shadow-none border-none' role='button'>
            <FaUserCircle size={25} />
            <span className='capitalize  font-medium'>Hai, {username}</span>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><Button color={'text-gray-600'}>Logout</Button></li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Navbar