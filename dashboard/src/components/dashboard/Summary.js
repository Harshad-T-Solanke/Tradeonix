import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {

  const [summary, setSummary] = useState({
    invested: 0,
    current: 0,
    profit: 0,
    holdingsCount: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3002/portfolioSummary")
      .then((res) => {
        setSummary(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="summary-container">

      <div className="summary-header">
        <h2>Portfolio Overview</h2>
        <p>Welcome back, Trader 👋</p>
      </div>

      <div className="summary-grid">

     

        <div className="summary-card">

          <p>Available Margin</p>

          <h3>₹ 50,000</h3>

          <span className="positive">
            +₹120 Today
          </span>

        </div>

     
        <div className="summary-card">

          <p>Total Holdings</p>

          <h3>{summary.holdingsCount} Stocks</h3>

          <span>
            Current Portfolio
          </span>

        </div>


        <div className="summary-card">

          <p>Total P&L</p>

          <h3
            className={
              summary.profit >= 0
                ? "profit"
                : "loss"
            }
          >
            ₹ {summary.profit.toFixed(2)}
          </h3>

          <span className="positive">
            +5.20%
          </span>

        </div>

       

        <div className="summary-card">

          <p>Portfolio Value</p>

          <h3>
            ₹ {summary.current.toFixed(2)}
          </h3>

          <span>
            Invested ₹{summary.invested.toFixed(2)}
          </span>

        </div>

      </div>
    </div>
  );
};

export default Summary;