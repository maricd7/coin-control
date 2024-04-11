import React, { useRef, useState } from 'react'
import Input from '../common/Input/Input'
import CtaButton from '../common/Buttons/Cta/CtaButton'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function SignupContainer() {
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()


    const navigate = useNavigate()

    //register submit handler
    const handleSubmit  = async(e)=>{
      e.preventDefault()

      try {
        const { data } = await axios.post(
          "http://localhost:5050/signup",
          {
              email: email.current.value,
              password: password.current.value,
              username: username.current.value,
          },
          { withCredentials: true }
        );
        const { success, message } = data;
        if (success) {
           navigate("/home");
        } else {
          console.log('error signing up')
        }
      } catch (error) {
        console.log('handler')
        console.log(error);
      }


    }
  return (
    <div className='p-8 flex flex-col gap-4 dark:bg-slate-900 bg-white shadow-lg rounded-lg w-fit border-2 border-gray-200 '>
        <h2 className='text-4xl font-bold'>Sign up</h2>
        <p>Make your Coin Control account today</p>
        <div className='flex flex-col gap-2'>
          <form onSubmit={(e)=>handleSubmit(e)}>
            <Input placeholder='Email' label='Email' type='email' reference={email}/>
            <Input placeholder='Usernamee' label='Username' type='text'  reference={username}/>
            <Input placeholder='Password' label='Password' type='password'  reference={password}/>
            <Input placeholder='Password' label='Confirm Password' type='password'  reference={confirmPassword}/>
            <CtaButton type='submit' text='Sign up'/>
          </form>
        </div>

    </div>
  )
}
