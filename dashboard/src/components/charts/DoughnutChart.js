import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export function DoughnutChart({ data }) {

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    cutout: "72%",

    plugins: {

      legend: {

        position: "bottom",

        labels: {
          color: "#cbd5e1",
          padding: 20,
          font: {
            size: 12,
            weight: "600",
          },
        },
      },

      tooltip: {

        backgroundColor: "#0f172a",

        titleColor: "#ffffff",

        bodyColor: "#cbd5e1",

        borderColor: "#334155",

        borderWidth: 1,
      },
    },

    animation: {
      animateRotate: true,
      duration: 1500,
    },
  };

  return (
    <div className="doughnut-card">

      <div className="chart-header">

        <h3>Portfolio Allocation</h3>

        <span>
          Holdings Distribution
        </span>

      </div>

      <div className="chart-wrapper">

        <Doughnut
          data={data}
          options={options}
        />

      </div>

    </div>
  );
}