import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios.get(
      `http://localhost:3002/userOrders/${localStorage.getItem(
        "userId"
      )}`
    )
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  return (
    <div className="orders-page">

      <div className="orders-header">

        <h2>
          Orders ({orders.length})
        </h2>

        <p>
          Manage and track all your trading orders
        </p>

      </div>

      {orders.length === 0 ? (

        <div className="orders-empty-card">

          <h3>No Orders Yet</h3>

          <p>
            You haven't placed any orders.
          </p>

        </div>

      ) : (

        <div className="orders-table-wrapper">

          <table className="orders-table">

            <thead>

              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>

            </thead>

            <tbody>

              {orders.map((order, index) => (

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

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>
  );
};

export default Orders;