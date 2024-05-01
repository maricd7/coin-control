import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export default function Logo() {
  return (
    <a href='/' className='flex items-center gap-1'>
        <Icon icon="mingcute:coin-2-fill" width="24" height="24"  style={{color:  'rgb(34, 197, 94)'}} />
        <h2 className='font-bold text-xl text-white'>Coin<span className='text-green-500'>Control</span></h2>
      </a>
  )
}
