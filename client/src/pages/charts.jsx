import React from "react";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/SideBar/Sidebar";
import Chart from "../components/Chart/Chart";

function Charts() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-72 w-full">
        <Nav />
        <Chart/>
      </div>
    </div>
  );
}

export default Charts;
