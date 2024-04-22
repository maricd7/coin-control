import { createContext, useContext, useState } from "react";

const TransactionContext = createContext({
    incomes: null, 
    expanses: null,
    transactionsHistory:null, 
  });

  export const FoodContextProvider = ({ children }) => {
    const incomes = useState(0)
    const expanses = useState(0)
    const transactionsHistory = useState([])

  
    const contextValue = {
      incomes,
      expanses,
      transactionsHistory
    };
  
    return (
      <TransactionContext.Provider value={contextValue}>{children}</TransactionContext.Provider>
    );
  };


  export const useFoodContext = () => {
    const transactionContext = useContext(transactionContext);
  
    if (!transactionContext) {
      throw new Error("No transactionContext Provider found when calling userContext.");
    }
  
    return transactionContext;
  };