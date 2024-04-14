import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Transaction({setTransactionModal}) {
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
          <h4 className="text-white font-bold">Car Payment</h4>
          <p className="text-gray-400">24.04.2024.</p>
        </div>
      </div>
      <h4 className="text-2xl text-red-500">$400</h4>
    </div>
  );
}
