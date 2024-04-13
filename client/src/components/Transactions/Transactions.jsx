import React from 'react'
import Transaction from './Transaction'

function Transactions() {
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-white text-4xl font-semibold'>Transaction history</h2>
        <div  className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full">
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
        </div>
    </div>
  )
}

export default Transactions