import React from 'react'

function CtaButton({onClick,text,type}) {
  return (
   <button onClick={onClick} type={type}>{text}</button>
  )
}

export default CtaButton