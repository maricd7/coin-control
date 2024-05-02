import React, { useEffect, useState } from "react";
import Nav from "../components/Nav/Nav";
import BudgetCard from "../components/BudgetCard/BudgetCard";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Transactions from "../components/Transactions/Transactions";
import Footer from "../components/Footer/Footer";
import { useTransactionContext } from "../contexts/TransactionContext";
import Sidebar from "../components/SideBar/Sidebar";
import { useNavigate } from "react-router-dom";
import Chart from "../components/Chart/Chart";

function Home() {
  const { username } = useTransactionContext();
  const [transactionModal, setTransactionModal] = useState(false);
  const { expanses, incomes, budget,savings } = useTransactionContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="flex ">
      <Sidebar />
      <div className="mx-72 w-full">
        <Nav />
        <div className="flex gap-4">
          <BudgetCard
            label="My Balance"
            value={budget}
            icon="mingcute:coin-2-line"
            border={"1px solid rgb(37 99 235)"}
          />
          <BudgetCard
            label="Incomes"
            value={incomes}
            icon="mingcute:coin-2-line"
            border={"1px solid rgb(34, 197, 94)"}
          />
          <BudgetCard
            label="Expanses"
            value={expanses}
            icon="mingcute:coin-2-line"
            border={"1px solid rgb(153 27 27)"}
          />
          <BudgetCard
            label="Savings"
            value={savings}
            icon="mingcute:pig-money-line"
            border={"1px solid rgb(34, 197, 94)"}
          />
        </div>
        <HomeBanner
          username={username}
          setTransactionModal={setTransactionModal}
        />
        <h2 className='text-white text-4xl font-semibold mb-8'>Charts</h2>
        <Chart/>
        <Transactions
          transactionModal={transactionModal}
          setTransactionModal={setTransactionModal}
          username={username}
        />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
