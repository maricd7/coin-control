import React, { useEffect } from 'react'
import LoginContainer from '../components/LoginContainer/Login'
import { useNavigate } from 'react-router-dom'
import { useTransactionContext } from '../contexts/TransactionContext'

function Login() {
  const navigate = useNavigate()
  const {username} = useTransactionContext()
  useEffect(()=>{
    if(username){
      console.log('username')
      navigate('/')
    }
  },[username])
  return (
    <div className='flex justify-center items-center flex-col h-screen'>
        <LoginContainer/>
    </div>
  )
}

export default Login