import { Icon } from '@iconify/react/dist/iconify.js'
import axios from 'axios'
import React from 'react'


function Sidebar() {

  const handleLogout = async () => {
    try {
      // Send a request to log out
      await axios.post('http://localhost:5050/logout', null, {
        withCredentials: true // Include cookies in the request
      });
      
      // Redirect or handle the logged out state
      window.location.href = '/login'; // Redirect to login page, for example
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle error
    }
  };
  return (
    <div className='fixed h-screen p-8'>
       <ul className='flex flex-col gap-8'>
        <li className='flex gap-2 items-center cursor-pointer'><a className='flex gap-2 items-center cursor-pointer' href='/'><Icon icon="ic:baseline-home" width="24" height="24"  style={{color:'#fff'}} /><div className='text-white'>Home</div></a></li>
        <li ><a className='flex gap-2 items-center cursor-pointer' href='/charts'><Icon icon="mdi:chart-line" width="24" height="24"  style={{color:'#fff'}} /><div className='text-white'>Charts</div></a></li>
        <li className='flex gap-2 items-center cursor-pointer'><a className='flex gap-2 items-center cursor-pointer' href='/profile'><Icon icon="iconamoon:profile-fill" width="24" height="24"  style={{color:'#fff'}} /><div className='text-white'>Profile</div></a></li>
        <li onClick={()=>handleLogout()} className='flex gap-2 items-center cursor-pointer' cursor-pointer><Icon icon="ph:sign-out-bold" width="24" height="24"  style={{color: '#fff'}} /><div className='text-white'>Log out</div></li>
       </ul>
    </div>
  )
}

export default Sidebar