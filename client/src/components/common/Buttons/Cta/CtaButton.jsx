import React from 'react'

function CtaButton({onClick,text,type}) {
  return (
   <button className='bg-gradient-to-r from-green-500 to-green-900 px-4 py-2 rounded-md text-white shadow-lg w-full hover:bg-green-700' onClick={onClick} type={type}>{text}</button>
  )
}

export default CtaButton