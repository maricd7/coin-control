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
    const {incomesData,expensesData,chartLabels} = useTransactionContext()
    console.log(chartLabels)
    const data = {
        labels: [...chartLabels],
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
    <div className='w-1/2 h-full p-8 bg-zinc-800 rounded-lg shadow-lg  flex justify-center gap-4 flex-col'>
        <h2 className='text-xl text-white'>Line Chart</h2>
        <Line data={data} />
    </div>
  )
}

export default Chart