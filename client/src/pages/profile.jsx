import React from "react";
import { useTransactionContext } from "../contexts/TransactionContext";
import Nav from "../components/Nav/Nav";
import Sidebar from "../components/SideBar/Sidebar";

function Profile() {
  const { username } = useTransactionContext();
  return (
    <div className="flex">
      <Sidebar />``
      <div className="mx-72 w-full">
        <Nav />
        <h2 className='text-white  text-6xl '>Welcome to your profile {username}</h2>
      </div>
    </div>
  );
}

export default Profile;
