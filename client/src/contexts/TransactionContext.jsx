import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";


const TransactionContext = createContext({
    incomes: null, 
    expanses: null,
    transactionsHistory:null, 
    username:'',
  });

  export const TransactionContextProvider = ({ children }) => {
    const [incomes, setIncomes] = useState(0)
    const [expanses,setExpanses] = useState(0)
    const [transactionsHistory,setTransactionHistory] = useState([])
    const [username,setUsername] = useState()

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
    }, [])
  
    
    
    
    
    
    
    
    
    
    const contextValue = {
      incomes,
      expanses,
      transactionsHistory,
      username
    };
  
    return (
      <TransactionContext.Provider value={contextValue}>{children}</TransactionContext.Provider>
    );
  };


  export const useTransactionContext = () => {
    const transactionContext = useContext(TransactionContext);
  
    if (!transactionContext) {
      throw new Error("No transactionContext Provider found when calling userContext.");
    }
  
    return transactionContext;
  };