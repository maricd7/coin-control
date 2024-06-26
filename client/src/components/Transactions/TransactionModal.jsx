import React, { useRef,useState } from 'react'
import Input from '../common/Input/Input'
import CtaButton from '../common/Buttons/Cta/CtaButton'
import { Icon } from '@iconify/react/dist/iconify.js'
import axios from 'axios'


export default function TransactionModal({setTransactionModal,username}) {

  const nameRef = useRef();
  const amountRef = useRef(); 
  const [selectedOption, setSelectedOption] = useState('Income'); 

  const handleSumit = async(e)=>{
    e.preventDefault();
   try{
    axios.post('http://localhost:5050/transactions' , {
      name: nameRef.current?.value,
      transactionType:selectedOption,
      amount: amountRef.current?.value,
      username:username,
    })
   }catch{
    console.log('error submitting transaction')
   }
  }

  return (
    <div className='bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-fit absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 '>
        <div className='flex w-full justify-between items-center gap-4'>
          <h4 className='font-semibold text-white text-2xl'>Enter amount and type</h4>
        <Icon onClick={()=>setTransactionModal(false)}  icon="mingcute:close-circle-fill" width="24" height="24"  style={{color:'#fff'}} />
        </div>
        <form className='w-full flex flex-col gap-4' onSubmit={(e)=>handleSumit(e)}>
            <Input placeholder='Name of the transaction' type='text' reference={nameRef}/>
            <Input placeholder='Enter value' type='number' reference={amountRef}/>
            <select className='w-full'  value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option>Income</option>
                <option>Expanse</option>
                <option>Saving</option>
            </select>
            <CtaButton text='Submit' type='submit'/>
        </form>
    </div>
  )
}
