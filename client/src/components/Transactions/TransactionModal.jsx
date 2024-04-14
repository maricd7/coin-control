import React from 'react'
import Input from '../common/Input/Input'
import CtaButton from '../common/Buttons/Cta/CtaButton'
import { Icon } from '@iconify/react/dist/iconify.js'

export default function TransactionModal({setTransactionModal}) {
  return (
    <div className='bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-fit absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 '>
        <div className='flex w-full justify-between items-center gap-4'>
          <h4 className='font-semibold text-white text-2xl'>Enter amount and type</h4>
        <Icon onClick={()=>setTransactionModal(false)}  icon="mingcute:close-circle-fill" width="24" height="24"  style={{color:'#fff'}} />
        </div>
        <form className='w-full flex flex-col gap-4'>
            <Input placeholder='Enter value' type='number' />
            <select className='w-full'>
                <option>Income</option>
                <option>Expanse</option>
            </select>
            <CtaButton text='Submit' type='submit'/>
        </form>
    </div>
  )
}
