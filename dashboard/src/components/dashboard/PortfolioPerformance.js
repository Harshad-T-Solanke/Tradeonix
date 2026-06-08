import React, {
useEffect,
useState,
} from "react";

import axios from "axios";

import { Line } from "react-chartjs-2";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend,
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Legend
);

const PortfolioPerformance = () => {

const [holdings, setHoldings] =
useState([]);

const [chartData, setChartData] =
  useState([]);

useEffect(() => {

axios
  .get(
    "http://localhost:3002/allHoldings"
  )
  .then((res) => {

    setHoldings(res.data);

  })
  .catch((err) => {

    console.log(err);

  });

  axios
  .get(
    "http://localhost:3002/portfolioPerformance"
  )
  .then((res) => {

    setChartData(res.data);

  })
  .catch((err) => {

    console.log(err);

  });


}, []);

const totalValue =
holdings.reduce(
(acc, stock) =>
acc +
stock.price * stock.qty,
0
);

const totalInvestment =
holdings.reduce(
(acc, stock) =>
acc +
stock.avg * stock.qty,
0
);

const growth =
totalInvestment > 0
? (
((totalValue -
totalInvestment) /
totalInvestment) *
100
).toFixed(2)
: 0;

const data = {
labels: [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
],


datasets: [
  {
    label:
      "Portfolio Value",

    data: [
      25000,
      27000,
      26500,
      29000,
      31000,
      totalValue,
    ],

    borderColor:
      "#00d4ff",

    backgroundColor:
      "rgba(0,212,255,0.2)",

    tension: 0.4,

    fill: true,
  },
],


};

return ( <div className="portfolio-performance-page">


  <h2>
    Portfolio Performance
  </h2>

  <div className="analytics-cards">

    <div className="analytics-card">

      <p>
        Current Value
      </p>

      <h3>
        ₹
        {totalValue.toFixed(
          0
        )}
      </h3>

    </div>

    <div className="analytics-card">

      <p>
        Investment
      </p>

      <h3>
        ₹
        {totalInvestment.toFixed(
          0
        )}
      </h3>

    </div>

    <div className="analytics-card">

      <p>Growth</p>

      <h3
        className={
          growth >= 0
            ? "profit"
            : "loss"
        }
      >
        {growth}%
      </h3>

    </div>

  </div>

  <div className="performance-card">

    <Line data={data} />

  </div>

</div>


);
};

export default PortfolioPerformance;
