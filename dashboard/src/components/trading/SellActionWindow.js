import React, { useState } from "react";
import axios from "axios";

const SellActionWindow = ({ uid, closeWindow }) => {

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(100);

  const handleSell = async () => {

    try {

      await axios.post(
        "http://localhost:3002/sellOrder",
        {
          userId: localStorage.getItem("userId"),
          name: uid,
          qty,
          price,
        }
      );

      alert("Sell Order Placed");

      closeWindow();

      window.location.reload();

    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="buy-window">

      <div className="buy-header">

        <div>
          <h3>{uid}</h3>
          <p>Sell Order</p>
        </div>

      </div>

      <div className="buy-form">

        <div className="input-group">

          <label>Quantity</label>

          <input
            type="number"
            value={qty}
            onChange={(e) =>
              setQty(e.target.value)
            }
          />

        </div>

        <div className="input-group">

          <label>Price</label>

          <input
            type="number"
            value={price}
            onChange={(e) =>
              setPrice(e.target.value)
            }
          />

        </div>

      </div>

      <div className="buy-actions">

        <button
          className="sell-btn"
          onClick={handleSell}
        >
          Sell Stock
        </button>

      </div>

    </div>
  );
};

export default SellActionWindow;