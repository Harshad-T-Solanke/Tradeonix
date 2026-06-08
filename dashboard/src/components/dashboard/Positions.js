import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="positions-page">

      {/* HEADER */}

      <div className="positions-header">

        <div>
          <h2>Open Positions</h2>
          <p>
            Monitor your active market positions
          </p>
        </div>

        <div className="position-badge">
          {allPositions.length} Active
        </div>

      </div>

      

      <div className="positions-table-wrapper">

        <table className="positions-table">

          <thead>

            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg Price</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Change</th>
            </tr>

          </thead>

          <tbody>

            {allPositions.map((stock, index) => {

              const curValue =
                stock.price * stock.qty;

              const profitValue =
                curValue -
                stock.avg * stock.qty;

              const isProfit =
                profitValue >= 0;

              return (
                <tr key={index}>

                  <td>
                    <span className="product-tag">
                      {stock.product}
                    </span>
                  </td>

                  <td className="instrument-name">
                    {stock.name}
                  </td>

                  <td>{stock.qty}</td>

                  <td>
                    ₹{stock.avg.toFixed(2)}
                  </td>

                  <td>
                    ₹{stock.price.toFixed(2)}
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

    
      {allPositions.length === 0 && (
        <div className="empty-position-card">

          <h3>No Open Positions</h3>

          <p>
            Your active positions will appear here.
          </p>

        </div>
      )}

    </div>
  );
};

export default Positions;