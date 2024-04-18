import React, { useState } from 'react'
import Transaction from './Transaction'
import TransactionModal from './TransactionModal'

function Transactions({transactionModal,setTransactionModal,username}) {

  
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-white text-4xl font-semibold'>Transaction history</h2>
        <div  className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full">
            <Transaction setTransactionModal={setTransactionModal}/>
            <Transaction setTransactionModal={setTransactionModal}/>
            <Transaction setTransactionModal={setTransactionModal}/>
            <Transaction setTransactionModal={setTransactionModal}/>
            <Transaction setTransactionModal={setTransactionModal}/>
        </div>
      {transactionModal ? <TransactionModal username={username} setTransactionModal={setTransactionModal}/> : <></>}
</div>
  )
}

export default Transactions