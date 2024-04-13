import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import BudgetCard from "../components/BudgetCard/BudgetCard";
import HomeBanner from "../components/HomeBanner/HomeBanner";



function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const storedUsername = Cookies.get("username");
        //if username is stored
        if (storedUsername) {
          setUsername(storedUsername);
        } else {
          const { data } = await axios.get("http://localhost:5050/user", {
            withCredentials: true
          });
          const { username } = data;
          setUsername(username);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    verifyUser()
  }, []);
  if(!username.length){ 
    navigate('/login')
  }
  return( 
  <div className="mx-72">
    <Nav username={username}/>
    <div className="flex gap-4">
      <BudgetCard label='My Balance' value='$5200' icon='mingcute:coin-2-line'/>
      <BudgetCard label='My Balance' value='$5200' icon='mingcute:coin-2-line'/>
      <BudgetCard label='My Balance' value='$5200' icon='mingcute:coin-2-line'/>
    </div>
    <HomeBanner username={username}/>
  </div>)
}

export default Home;
