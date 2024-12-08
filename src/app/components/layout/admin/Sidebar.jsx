import { FaHome, FaBook, FaUserAlt, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../../common/LogoutButton';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="w-full px-3 md:w-20 bg-white border min-h-screen flex md:flex-col items-start py-4 space-x-8 md:space-y-8 md:space-x-0">
     

      {/* Menu Items */}
      <div
        className={` flex md:flex flex-col items-center justify-between w-full md:w-auto gap-10`}
      >
        <button
          onClick={() => router.push('/admin')}
          className="btn btn-ghost active:bg-gray-500"
        >
          <FaHome size={20} />
        </button>
        <button
          onClick={() => router.push('/admin/matakuliah')}
          className="btn btn-ghost"
        >
          <FaBook size={20} />
        </button>
        <button
          onClick={() => router.push('/admin/user')}
          className="btn btn-ghost"
        >
          <FaUserAlt size={20} />
        </button>

        {/* Separator */}
        <div className="hidden md:block w-full border-t mt-8"></div>

        {/* Logout Button */}
        <div className="md:block">
          <Button>
            <FaSignOutAlt size={20} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
