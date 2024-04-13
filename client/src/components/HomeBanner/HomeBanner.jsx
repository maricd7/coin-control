import React from 'react'
import CtaButton from '../common/Buttons/Cta/CtaButton'
import moneyIcon from '../../images/money.png'
export default function HomeBanner({username}) {
  return (
    <div className='my-24 p-16 bg-zinc-800 rounded-lg shadow-lg w-full flex justify-center gap-24 items-center'>
      <div className='flex flex-col max-w-fit gap-8'>
        <div>
          <h1 className='text-white  text-6xl '>Welcome back <br></br><span className='font-semibold'>{username}</span></h1>
          <p className='text-white text-xl'>Add income or expanse and track your analytics!</p>
        </div>
        <CtaButton text='Add Transaction +' type='button'/>
      </div>
      <img src={moneyIcon} alt='money-icon' className='w-80 h-80 right-6 top-1/2 '/>
    </div>
  )
}
