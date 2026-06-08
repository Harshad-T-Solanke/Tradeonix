import React, { useState, useEffect } from 'react'

import axios from "axios";
import { VerticalGraph } from '../charts/VerticalGraph';


const Holdings = () => {

  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    })
  }, [])


  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price * stock.qty),
        backgroundColor: "rgb(75,192,192)"
      }
    ]
  }



  return (
  <div className="holdings-page">

  

    <div className="holdings-header">

      <div>
        <h2>Holdings</h2>
        <p>
          Track your investments and portfolio performance
        </p>
      </div>

      <div className="holding-badge">
        {allHoldings.length} Stocks
      </div>

    </div>


    <div className="holdings-summary">

      <div className="holding-card">
        <p>Total Investment</p>
        <h3>₹29,875</h3>
      </div>

      <div className="holding-card">
        <p>Current Value</p>
        <h3>₹31,428</h3>
      </div>

      <div className="holding-card">
        <p>Total Profit</p>
        <h3 className="profit">
          ₹1,553 (+5.20%)
        </h3>
      </div>

    </div>

    

    <div className="holdings-table-wrapper">

      <table className="holdings-table">

        <thead>

          <tr>
            <th>Instrument</th>
            <th>Qty</th>
            <th>Avg Price</th>
            <th>LTP</th>
            <th>Current Value</th>
            <th>P&L</th>
            <th>Net Change</th>
            <th>Day Change</th>
          </tr>

        </thead>

        <tbody>

          {allHoldings.map((stock, index) => {

            const curValue =
              stock.price * stock.qty;

            const isProfit =
              curValue - stock.avg * stock.qty >= 0;

            const profitValue =
              curValue -
              stock.avg * stock.qty;

            return (
              <tr key={index}>

                <td className="stock-name">
                  {stock.name}
                </td>

                <td>{stock.qty}</td>

                <td>
                  ₹{stock.avg.toFixed(2)}
                </td>

                <td>
                  ₹{stock.price.toFixed(2)}
                </td>

                <td>
                  ₹{curValue.toFixed(2)}
                </td>

                <td
                  className={
                    isProfit
                      ? "profit"
                      : "loss"
                  }
                >
                  ₹{profitValue.toFixed(2)}
                </td>

                <td
                  className={
                    stock.net > 0
                      ? "profit"
                      : "loss"
                  }
                >
                  {stock.net}
                </td>

                <td
                  className={
                    stock.day > 0
                      ? "profit"
                      : "loss"
                  }
                >
                  {stock.day}
                </td>

              </tr>
            );
          })}

        </tbody>

      </table>

    </div>

    

    <div className="holdings-chart-card">

      <h3>
        Portfolio Allocation
      </h3>

      <VerticalGraph data={data} />

    </div>

  </div>
);
}

export default Holdings;