import React from 'react'

export default function Input({label,placeholder,error}) {
  return (
    <div>
        <label>{label}</label>
        <input placeholder={placeholder}/>
        <span>{error}</span>
    </div>
  )
}
