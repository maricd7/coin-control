import React from 'react'
import Logo from '../common/Logo/Logo'
export default function Nav({username}) {
  return (
    <nav className='py-8 flex w-full justify-between'>
      <Logo/>
      <h4 className='text-white'>{username}</h4>
    </nav>
  )
}
