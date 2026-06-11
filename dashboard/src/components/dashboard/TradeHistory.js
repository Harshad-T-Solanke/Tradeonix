import React, { useEffect, useState } from "react";
import axios from "axios";

const TradeHistory = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios
      .get(
        `http://localhost:3002/userOrders/${localStorage.getItem("userId")}`
      )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const totalTrades = orders.length;

  const buyOrders = orders.filter(
    (order) => order.mode === "BUY"
  ).length;

  const sellOrders = orders.filter(
    (order) => order.mode === "SELL"
  ).length;

  const totalTradeValue = orders.reduce(
    (acc, order) =>
      acc + Number(order.price) * Number(order.qty),
    0
  );

  return (
    <div className="orders-page">

      <div className="orders-header">
        <h2>Trade History</h2>
        <p>All your BUY and SELL trades</p>
      </div>

      {/* SUMMARY CARDS */}

      <div className="analytics-cards">

        <div className="analytics-card">
          <p>Total Trades</p>
          <h3>{totalTrades}</h3>
        </div>

        <div className="analytics-card">
          <p>Buy Orders</p>
          <h3 className="profit">
            {buyOrders}
          </h3>
        </div>

        <div className="analytics-card">
          <p>Sell Orders</p>
          <h3 className="loss">
            {sellOrders}
          </h3>
        </div>

        <div className="analytics-card">
          <p>Total Trade Value</p>
          <h3>
            ₹{totalTradeValue.toLocaleString()}
          </h3>
        </div>

      </div>

      

      <div className="orders-table-wrapper">

        <table className="orders-table">

          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Type</th>
              <th>Date & Time</th>
            </tr>
          </thead>

          <tbody>

            {orders.length > 0 ? (

              orders.map((order, index) => (

                <tr key={index}>

                  <td>{order.name}</td>

                  <td>{order.qty}</td>

                  <td>
                    ₹{order.price}
                  </td>

                  <td>
                    <span
                      className={
                        order.mode === "BUY"
                          ? "buy-badge"
                          : "sell-badge"
                      }
                    >
                      {order.mode}
                    </span>
                  </td>

                  <td>
                    {new Date(
                      order.createdAt
                    ).toLocaleString()}
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="5"
                  style={{
                    textAlign: "center",
                    padding: "20px",
                  }}
                >
                  No Trades Found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default TradeHistory;