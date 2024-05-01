import React from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/SideBar/Sidebar";
import Chart from "../components/Chart/Chart";
import PieChart from "../components/Chart/PieChart";

function Charts() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-72 w-full">
        <Nav />
        <h2 className='text-4xl text-white font-bold'>Charts</h2>
        <div className="flex justify-between mt-8">
        <Chart/>
        <PieChart/>
        </div>
      </div>
    </div>
  );
}

export default Charts;
