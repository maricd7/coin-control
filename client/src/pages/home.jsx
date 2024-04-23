import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import BudgetCard from "../components/BudgetCard/BudgetCard";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Transactions from "../components/Transactions/Transactions";
import Footer from "../components/Footer/Footer";
import { useTransactionContext } from "../contexts/TransactionContext";



function Home() {
  const {username} = useTransactionContext()
  const [transactionModal,setTransactionModal] = useState(false)
  const {expanses,incomes,budget}  = useTransactionContext()

  return( 
  <div className="mx-72">
    <Nav username={username}/>
    <div className="flex gap-4">
      <BudgetCard label='My Balance' value={budget} icon='mingcute:coin-2-line'/>
      <BudgetCard label='Incomes' value={incomes} icon='mingcute:coin-2-line'/>
      <BudgetCard label='Expanses' value={expanses} icon='mingcute:coin-2-line'/>
    </div>
    <HomeBanner username={username} setTransactionModal={setTransactionModal}/>
    <Transactions transactionModal={transactionModal} setTransactionModal={setTransactionModal} username={username}/> 
    <Footer/>
  </div>)
}

export default Home;
