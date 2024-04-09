import React from 'react'

export default function Input({label,placeholder,error,type}) {
  return (
    <div className='flex flex-col gap-4'>
        <label>{label}</label>
        <input placeholder={placeholder} type={type} className='rounded-md border border-slate-950 p-2'/>
        <span>{error}</span>
    </div>
  )
}
