import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
export default function Nav({username}) {
  return (
    <nav className='px-48 py-8 flex w-full justify-between'>
      <div className='flex items-center gap-1'>
        <Icon icon="mingcute:coin-2-fill" width="24" height="24"  style={{color:  'rgb(37 99 235)'}} />
        <h2 className='font-bold text-xl text-white'>Coin<span className='text-blue-600'>Control</span></h2>
      </div>
      <h4 className='text-white'>{username}</h4>
    </nav>
  )
}
