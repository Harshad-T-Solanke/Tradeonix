import React from "react";

const Funds = () => {
  return (
    <div className="funds-page">


      <div className="funds-header">

        <div>
          <h2>Funds & Balance</h2>
          <p>Manage your trading capital</p>
        </div>

        <div className="funds-actions">
          <button className="add-funds-btn">
            Add Funds
          </button>

          <button className="withdraw-btn">
            Withdraw
          </button>
        </div>

      </div>

     

      <div className="funds-cards">

        <div className="fund-card">
          <p>Available Margin</p>
          <h3>₹ 4,043</h3>
        </div>

        <div className="fund-card">
          <p>Used Margin</p>
          <h3>₹ 3,757</h3>
        </div>

        <div className="fund-card">
          <p>Available Cash</p>
          <h3>₹ 4,043</h3>
        </div>

      </div>

    

      <div className="funds-grid">

        <div className="funds-table">

          <h4>Equity Account</h4>

          <div className="fund-row">
            <span>Opening Balance</span>
            <span>₹ 4,043</span>
          </div>

          <div className="fund-row">
            <span>Payin</span>
            <span>₹ 4,064</span>
          </div>

          <div className="fund-row">
            <span>SPAN</span>
            <span>₹ 0</span>
          </div>

          <div className="fund-row">
            <span>Delivery Margin</span>
            <span>₹ 0</span>
          </div>

          <div className="fund-row">
            <span>Exposure</span>
            <span>₹ 0</span>
          </div>

          <div className="fund-row">
            <span>Options Premium</span>
            <span>₹ 0</span>
          </div>

          <div className="fund-row">
            <span>Total Collateral</span>
            <span>₹ 0</span>
          </div>

        </div>

       
        <div className="commodity-card">

          <h4>Commodity Account</h4>

          <p>
            You don't have a commodity
            trading account yet.
          </p>

          <button className="open-account-btn">
            Open Account
          </button>

        </div>

      </div>

    </div>
  );
};

export default Funds;