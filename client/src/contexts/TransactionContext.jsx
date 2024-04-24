import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";


const TransactionContext = createContext({
    incomes: null, 
    expanses: null,
    budget:null,
    transactions:null, 
    username:'',

  });

  export const TransactionContextProvider = ({ children }) => {
    const [transactions,setTransactions]=  useState([])
    const [incomes, setIncomes] = useState(0)
    const [expanses,setExpanses] = useState(0)
    const [budget,setBudget]= useState(0)
    const [username,setUsername] = useState()
    const navigate = useNavigate()

    useEffect(() => {
      console.log('Context executed!')
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
          navigate('/login')
        }
      };

      const getTransactions = async()=>{
        try{
          const { data } = await axios.get(`http://localhost:5050/transactions?username=${username}`)
          setTransactions(data)
          console.log('Success getting transactions', data)
          setType(data)
        }catch{
          console.log('Error fetching transactions!')
        }  
      }
      verifyUser()
      getTransactions()

    }, [username,])

    function setType(values){
      values.forEach(transaction=>{

        // if transaction is income 
        if(transaction.transactionType.toLowerCase() == 'income'){
          setIncomes(prevIncomes => prevIncomes + transaction.amount);
          setBudget(prevBudget=>prevBudget+transaction.amount)
        }
        //if transaction is expanse
        else{
          setExpanses(prevIncomes => prevIncomes + transaction.amount);
          setBudget(prevBudget=>prevBudget-transaction.amount)
        }
      })
    }     


    const contextValue = {
      incomes,
      expanses,
      budget,
      transactions,
      username,
      
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