import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function Sidebar() {
  return (
    <div className='fixed h-screen p-8'>
       <ul className='flex flex-col gap-8'>
        <li className='flex gap-2 items-center cursor-pointer'><Icon icon="ic:baseline-home" width="24" height="24"  style={{color:'#fff'}} /><div className='text-white'>Home</div></li>
        <li ><a className='flex gap-2 items-center cursor-pointer' href='/charts'><Icon icon="mdi:chart-line" width="24" height="24"  style={{color:'#fff'}} /><div className='text-white'>Charts</div></a></li>
        <li className='flex gap-2 items-center cursor-pointer'><Icon icon="iconamoon:profile-fill" width="24" height="24"  style={{color:'#fff'}} /><div className='text-white'>Profile</div></li>
        <li className='flex gap-2 items-center cursor-pointer' cursor-pointer><Icon icon="ph:sign-out-bold" width="24" height="24"  style={{color: '#fff'}} /><div className='text-white'>Log out</div></li>
       </ul>
    </div>
  )
}

export default Sidebar