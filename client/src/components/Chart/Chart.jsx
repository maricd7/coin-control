import React, { useEffect, useState } from 'react'
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import {useTransactionContext} from '../../contexts/TransactionContext';



ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  



function Chart() {
    const {incomesData,expensesData} = useTransactionContext()
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Incomes",
            data:[...incomesData],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(34, 197, 94, 1 )"
          },
          {
            label: "Expanses",
            data: [...expensesData],
            fill: false,
            borderColor: "rgba(153, 27, 27,1)"
          }
        ]
      };
      console.log(incomesData,'inkom dejta')
  return (
    <div>
        <h2 className='text-4xl text-white font-bold'>Incomes and Expanses Chart</h2>
        <Line data={data} />
    </div>
  )
}

export default Chart