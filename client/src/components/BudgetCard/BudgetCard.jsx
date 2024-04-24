import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function BudgetCard({ label, value, icon,border }) {
  return (
    <div className="bg-zinc-800 p-8 rounded-lg shadow-lg w-full" style={{border:border}}>
      <div className="flex gap-1 items-center text-white">
        <Icon icon={icon} width="24" height="24" style={{ color: "#fff" }} />
        <p>{label}</p>
      </div>
      <h2 className="text-4xl font-bold text-white">{value}</h2>
    </div>
  );
}
