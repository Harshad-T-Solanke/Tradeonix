import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,

  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  maintainAspectRatio: false,

  animation: {
    duration: 1800,
  },

  plugins: {
    legend: {
      display: false,
    },

    title: {
      display: true,
      text: "Portfolio Performance",
      color: "#ffffff",
      font: {
        size: 20,
        weight: "bold",
      },
      padding: {
        bottom: 25,
      },
    },

    tooltip: {
      backgroundColor: "#0f172a",
      titleColor: "#ffffff",
      bodyColor: "#cbd5e1",
      borderColor: "#00d4ff",
      borderWidth: 1,
      padding: 12,
    },
  },

  scales: {
    x: {
      ticks: {
        color: "#94a3b8",
      },

      grid: {
        display: false,
      },
    },

    y: {
      beginAtZero: true,

      ticks: {
        color: "#94a3b8",
      },

      grid: {
        color: "rgba(255,255,255,0.08)",
      },
    },
  },
};

export function VerticalGraph({ data }) {
  return (
    <div className="chart-card">

      <Bar
        options={options}
        data={data}
      />

    </div>
  );
}