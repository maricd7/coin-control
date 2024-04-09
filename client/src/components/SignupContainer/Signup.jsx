import React from 'react'
import Input from '../common/Input/Input'
import CtaButton from '../common/Buttons/Cta/CtaButton'

export default function SignupContainer() {
  return (
    <div className='p-8 flex flex-col gap-4 dark:bg-slate-900 bg-white shadow-lg rounded-lg w-fit border-2 border-gray-200 '>
        <h2 className='text-4xl font-bold'>Sign up</h2>
        <p>Make your Coin Control account today</p>
        <div className='flex flex-col gap-2'>
          <Input placeholder='Email' label='Email' type='text'/>
          <Input placeholder='Password' label='Password' type='password'/>
          <Input placeholder='Password' label='Confirm Password' type='password'/>
        </div>
        <CtaButton type='button' text='Sign up'/>
    </div>
  )
}
