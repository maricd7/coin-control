import React, { useRef } from 'react'
import Input from '../common/Input/Input'
import CtaButton from '../common/Buttons/Cta/CtaButton'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useTransactionContext } from '../../contexts/TransactionContext'

export default function LoginContainer() {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate();
  const { getTransactions } = useTransactionContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5050/login",
        {
          email: email.current.value,
          password: password.current.value,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data
      if (success) {
        // If login is successful, trigger a re-fetch of transactions
        getTransactions();
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='p-8 flex flex-col gap-4 dark:bg-slate-900 bg-white shadow-lg rounded-lg w-fit border-2 border-gray-200 '>
      <h2 className='text-4xl font-bold'>Login</h2>
      <p>Login to your CoinControl app</p>
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <Input placeholder='Email' label='Email' type='text' reference={email} />
        <Input placeholder='Password' label='Password' type='password' reference={password} />
        <CtaButton text='Login' type='submit' />
      </form>
    </div>
  )
}
