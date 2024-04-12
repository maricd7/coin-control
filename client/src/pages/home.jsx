import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Nav from "../components/Nav/Nav";



function Home() {
  const [username, setUsername] = useState("");

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
  console.log(username, 'user nejm')
  return( 
  <div>
    <Nav username={username}/>
  </div>)
}

export default Home;
