import React, { useEffect, useState } from 'react'
import Transaction from './Transaction'
import TransactionModal from './TransactionModal'
import { useTransactionContext } from '../../contexts/TransactionContext'

function Transactions({transactionModal,setTransactionModal,username}) {
  const {transactions} = useTransactionContext()
  
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-white text-4xl font-semibold'>Transaction history</h2>
        <div  className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full">
            <ul>
              {transactions.map((transaction,index)=>(
                 <Transaction key={index} setTransactionModal={setTransactionModal} name={transaction.name} amount={transaction.amount} date={transaction.createdAt} type={transaction.transactionType}/>
              ))}
            </ul>
        </div>
      {transactionModal ? <TransactionModal username={username} setTransactionModal={setTransactionModal}/> : <></>}
</div>
  )
}

export default Transactions