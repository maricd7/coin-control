import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useTransactionContext } from "../../contexts/TransactionContext";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function PieChart() {
  const { incomes, expanses } = useTransactionContext();

  const data = {
    labels: ["Incomes", "Expanses"],
    datasets: [
      {
        label: "Chart",
        data: [incomes, expanses],
        backgroundColor: ["rgba(34, 197, 94,1)", "rgba(153, 27, 27,1)"],
        borderColor: ["rgba(34, 197, 94,0.5)", "rgba(153, 27, 27,0.5)"],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
  };
  return (
    <div className="w-96">
      <h2 className="text-xl text-white">Doughnut Chart</h2>
      <Doughnut data={data} />
    </div>
  );
}
