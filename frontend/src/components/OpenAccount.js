import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <section className="container py-5">

      <div
        className="open-account-card text-center"
      >

        {/* SMALL BADGE */}

        <div className="trade-badge mb-4">
          🚀 Trusted by Modern Traders
        </div>

     

        <h1
          className="fw-bold"
          style={{
            fontSize: "3.5rem",
            lineHeight: "1.2",
          }}
        >
          Open Your
          <span className="gradient-text"> Tradeonix </span>
          Account
        </h1>

        <p
          className="mt-4 mx-auto"
          style={{
            maxWidth: "700px",
            color: "#94a3b8",
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Invest smarter with zero account opening charges,
          advanced trading tools, lightning-fast execution,
          and real-time market insights.
        </p>

      

        <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">

          <Link to="/signup">
            <button className="primary-btn">
              Get Started
            </button>
          </Link>

          <button className="explore-btn">
            Explore Features
          </button>

        </div>

    

        <div className="row mt-5 pt-4">

          <div className="col-md-4 mb-4">
            <div className="mini-card">
              <h2>₹0</h2>
              <p>Account Opening</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="mini-card">
              <h2>₹20</h2>
              <p>Intraday & F&O</p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="mini-card">
              <h2>1M+</h2>
              <p>Active Traders</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OpenAccount;