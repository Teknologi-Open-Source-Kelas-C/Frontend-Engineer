import { useRouter } from 'next/navigation'
import React from 'react'
import Swal from 'sweetalert2';
import { logout } from '../../utils/authHelper';

const LogoutButton = ({color, children}) => {
  const router = useRouter();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        Swal.fire('Success', 'Logout successful', 'success');
        router.push('/login');
      }
    });
  }
  return (
    <button className={color} onClick={handleLogout}>{children}</button>
  )
}

export default LogoutButton