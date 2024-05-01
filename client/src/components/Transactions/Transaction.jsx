import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";

export default function Transaction({setTransactionModal,name,date,amount,type}) {
  const [icon, setIcon] = useState('mingcute:minus-circle-line')
  const [iconColor,setIconColor] = useState('red')

  //update styles based on transaction type 
  useEffect(()=>{
    if(type=== 'Income'){
      setIcon('mingcute:plus-line')
      setIconColor('#4ade80')
    }
  },[])

  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-4">
        <Icon
          icon={icon}
          width="24"
          height="24"
          color={iconColor}
          onClick={()=>setTransactionModal(false)}
        />
        <div className="flex flex-col">
          <h4 className="text-white font-bold">{name}</h4>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
      <h4 className="text-2xl" style={{color:iconColor}}>${amount}</h4>
    </div>
  );
}
