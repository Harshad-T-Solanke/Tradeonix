import React, { useEffect, useState } from "react";
import axios from "axios";
import { DoughnutChart } from "../charts/DoughnutChart";
import { VerticalGraph } from "../charts/VerticalGraph";

const Analytics = () => {

  const [holdings, setHoldings] = useState([]);

  useEffect(() => {

    axios
      .get("http://localhost:3002/allHoldings")
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);


  const totalInvestment = holdings.reduce(
    (acc, stock) =>
      acc + stock.avg * stock.qty,
    0
  );

  const currentValue = holdings.reduce(
    (acc, stock) =>
      acc + stock.price * stock.qty,
    0
  );

  const totalProfit =
    currentValue - totalInvestment;

  const profitPercent =
    totalInvestment > 0
      ? (
        (totalProfit / totalInvestment) *
        100
      ).toFixed(2)
      : 0;

  const totalStocks =
    holdings.length;

  const topGainer =
  holdings.reduce(
    (max, stock) => {

      const gain =
        stock.price - stock.avg;

      const maxGain =
        (max?.price || 0) -
        (max?.avg || 0);

      return gain > maxGain
        ? stock
        : max;

    },
    null
  );

  const topInvestment =
    holdings.reduce(
      (max, stock) =>
        stock.price * stock.qty >
          ((max?.price || 0) *
            (max?.qty || 0))
          ? stock
          : max,
      null
    );

  const doughnutData = {
    labels: holdings.map(
      (stock) => stock.name
    ),

    datasets: [
      {
        data: holdings.map(
          (stock) =>
            stock.price * stock.qty
        ),

        backgroundColor: [
          "#00d4ff",
          "#22c55e",
          "#7c3aed",
          "#f59e0b",
          "#ef4444",
          "#3b82f6",
          "#14b8a6",
          "#ec4899",
        ],
      },
    ],
  };

  const barData = {
    labels: holdings.map(
      (stock) => stock.name
    ),

    datasets: [
      {
        label: "Portfolio Value",

        data: holdings.map(
          (stock) =>
            stock.price * stock.qty
        ),

        backgroundColor: "#00d4ff",
      },
    ],
  };

  const profitData = {
    labels: holdings.map(
      (stock) => stock.name
    ),

    datasets: [
      {
        label: "Profit / Loss",

        data: holdings.map(
          (stock) =>
            (stock.price -
              stock.avg) *
            stock.qty
        ),

        backgroundColor:
          "#22c55e",
      },
    ],
  };

  return (
    <div className="analytics-page">

      <h2>Portfolio Analytics</h2>

      <div className="analytics-cards">

        <div className="analytics-card">
          <p>Total Investment</p>

          <h3>
            ₹{totalInvestment.toFixed(0)}
          </h3>
        </div>

        <div className="analytics-card">
          <p>Current Value</p>

          <h3>
            ₹{currentValue.toFixed(0)}
          </h3>
        </div>

        <div className="analytics-card">
          <p>Total Profit</p>

          <h3
            className={
              totalProfit >= 0
                ? "profit"
                : "loss"
            }
          >
            ₹{totalProfit.toFixed(0)}
          </h3>
        </div>

        <div className="analytics-card">
          <p>Profit %</p>

          <h3
            className={
              totalProfit >= 0
                ? "profit"
                : "loss"
            }
          >
            {profitPercent}%
          </h3>
        </div>

        <div className="analytics-card">
          <p>Total Stocks</p>

          <h3>
            {totalStocks}
          </h3>
        </div>

        <div className="analytics-card">
          <p>Top Stock</p>

          <h3>
            {
              topGainer?.name ||
              "N/A"
            }
          </h3>
        </div>

        <div className="analytics-card">
          <p>Largest Holding</p>

          <h3>
            {
              topInvestment?.name ||
              "N/A"
            }
          </h3>
        </div>

      </div>

      <div className="analytics-chart-grid">

        <DoughnutChart
          data={doughnutData}
        />

        <VerticalGraph
          data={barData}
        />

        <VerticalGraph
          data={profitData}
        />

      </div>

    </div>
  );
};

export default Analytics;