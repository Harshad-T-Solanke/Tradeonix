import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "../../context/GeneralContext";


import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(100);

  const totalAmount =
    Number(stockQuantity) * Number(stockPrice);

  const handleBuyClick = async () => {
    try {
      await axios.post(
        "http://localhost:3002/newOrder",
        {
          userId: localStorage.getItem("userId"),
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        }
      );

      alert("Buy Order Placed Successfully!");

      generalContext.closeBuyWindow();

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="buy-window">



      <div className="buy-header">

        <div>
          <h3>{uid}</h3>
          <p>Buy Order</p>
        </div>

        <span className="live-badge">
          LIVE
        </span>

      </div>


      <div className="buy-form">

        <div className="input-group">

          <label>Quantity</label>

          <input
            type="number"
            min="1"
            value={stockQuantity}
            onChange={(e) =>
              setStockQuantity(e.target.value)
            }
          />

        </div>

        <div className="input-group">

          <label>Price (₹)</label>

          <input
            type="number"
            step="0.05"
            value={stockPrice}
            onChange={(e) =>
              setStockPrice(e.target.value)
            }
          />

        </div>

      </div>


      <div className="order-summary">

        <div className="summary-row">
          <span>Margin Required</span>
          <span>₹140.65</span>
        </div>

        <div className="summary-row">
          <span>Total Value</span>
          <span>
            ₹{totalAmount.toLocaleString()}
          </span>
        </div>

      </div>



      <div className="buy-actions">

        <button
          className="buy-btn"
          onClick={handleBuyClick}
        >
          Buy Stock
        </button>

        <button
          className="cancel-btn"
          onClick={handleCancelClick}
        >
          Cancel
        </button>

      </div>

    </div>
  );
};

export default BuyActionWindow;