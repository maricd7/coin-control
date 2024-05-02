import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const TransactionContext = createContext({
  incomes: null,
  expanses: null,
  budget: null,
  transactions: null,
  savings:null,
  incomesData:[],
  expensesData:[],
  chartLabels:[],
  username: '',
  setUsername:()=>[],
});

export const TransactionContextProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [incomes, setIncomes] = useState(0);
  const [expanses, setExpanses] = useState(0);
  const [budget, setBudget] = useState(0);
  const [username, setUsername] = useState('');
  const [incomesData,setIncomesData] = useState([]);
  const [expensesData,setExpenseData] = useState([]);
  const [chartLabels,setChartLabels] = useState([]);
  const [savings,setSavings] = useState(0)

  
  const navigate = useNavigate();
  const url = window.location.href
  useEffect(() => {
    // console.log('Context executed!')
    // console.log('Effect triggered with username:', username);
    const verifyUser = async () => {
      try {
        const storedUsername = Cookies.get("username");
        // If username is stored
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
        // console.error("Error fetching username:", error);

        //navigate to login when there is no user
        if(url.includes('signup') || url.includes('landing')){
          return
        }else{
          navigate('/login')
        }
      }
    };
   
    verifyUser();

  }, [username]);

  //get transactions from db
  const getTransactions = async () => {
    if(username){
      try {
        const { data } = await axios.get(`http://localhost:5050/transactions?username=${username}`)
        console.log(data, 'data')
        setTransactions(data)
        setType(data)
        data.forEach(elem=>{
          setChartLabels(prevLabels=>[...prevLabels,elem.createdAt?.slice(0,7)])
        })
        
      } catch (error) {
        console.log('Error fetching transactions!', error)
      }
    }else{
      return
    }
    
  };
 useEffect(()=>{
  getTransactions();
 },[expanses,username])


 console.log(chartLabels)
 //filter out types and values
  function setType(values) {
    let totalIncomes = 0;
    let totalExpenses = 0;
    let totalSavings = 0;
    values.forEach((transaction) => {
      if (transaction.transactionType.toLowerCase() === 'income') {
        totalIncomes += transaction.amount;
        setIncomesData(prevData => [...prevData, transaction.amount])
      }else if(transaction.transactionType.toLowerCase() === 'saving'){
        totalSavings+=transaction.amount;
      }
       else {
        totalExpenses += transaction.amount;
        setExpenseData(prevData => [...prevData, transaction.amount]);
      }
    });

    const totalBudget = totalIncomes - totalExpenses;

    // Update after calculating
    setIncomes(totalIncomes);
    setExpanses(totalExpenses);
    setSavings(totalSavings)
    setBudget(totalBudget);
  }
  const contextValue = {
    incomes,
    expanses,
    budget,
    transactions,
    username,
    setUsername,
    incomesData,
    expensesData,
    chartLabels,
    savings,
  };

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => {
  const transactionContext = useContext(TransactionContext);

  if (!transactionContext) {
    throw new Error("No transactionContext Provider found when calling userContext.");
  }

  return transactionContext;
};
