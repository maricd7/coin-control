import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Transaction({setTransactionModal,name,date,amount}) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-4">
        <Icon
          icon="mingcute:minus-circle-line"
          width="24"
          height="24"
          style={{ color: "red" }}
          onClick={()=>setTransactionModal(false)}
        />
        <div className="flex flex-col">
          <h4 className="text-white font-bold">{name}</h4>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
      <h4 className="text-2xl text-red-500">${amount}</h4>
    </div>
  );
}
