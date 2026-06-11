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
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

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

export function VerticalGraph({ data }) {

  const { theme } = useContext(ThemeContext);

  const options = {
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

        color:
          theme === "light"
            ? "#111827"
            : "#ffffff",

        font: {
          size: 20,
          weight: "bold",
        },

        padding: {
          bottom: 25,
        },
      },

      tooltip: {
        backgroundColor:
          theme === "light"
            ? "#ffffff"
            : "#0f172a",

        titleColor:
          theme === "light"
            ? "#111827"
            : "#ffffff",

        bodyColor:
          theme === "light"
            ? "#111827"
            : "#cbd5e1",

        borderColor: "#00d4ff",

        borderWidth: 1,

        padding: 12,
      },
    },

    scales: {

      x: {

        ticks: {
          color:
            theme === "light"
              ? "#111827"
              : "#94a3b8",
        },

        grid: {
          display: false,
        },
      },

      y: {

        beginAtZero: true,

        ticks: {
          color:
            theme === "light"
              ? "#111827"
              : "#94a3b8",
        },

        grid: {
          color:
            theme === "light"
              ? "rgba(0,0,0,0.08)"
              : "rgba(255,255,255,0.08)",
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <Bar
        options={options}
        data={data}
      />
    </div>
  );
}