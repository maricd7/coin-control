import React from 'react'

function CtaButton({onClick,text,type}) {
  return (
   <button className='bg-blue-600 px-4 py-2 rounded-md text-white shadow-lg w-full' onClick={onClick} type={type}>{text}</button>
  )
}

export default CtaButton