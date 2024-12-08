import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import Button from '../../common/LogoutButton';


const Navbar = ({ role, setIsOpen, isOpen }) => {
  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
        </div>
        <a className="btn btn-ghost text-xl font-bold">E-Modul</a>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} className='flex items-center gap-2 btn bg-transparent hover:bg-transparent shadow-none border-none' role='button'>
            <FaUserCircle size={25} />
            <span className='capitalize  font-medium'>Hai, {role}</span>
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