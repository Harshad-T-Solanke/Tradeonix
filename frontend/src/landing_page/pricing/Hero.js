import React from "react";
import {
  FaChartLine,
  FaBolt,
  FaCoins,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="container py-5">

      

      <div className="text-center mb-5">

        <div className="pricing-top-badge">
          TRANSPARENT PRICING
        </div>

        <h1
          className="fw-bold mt-4"
          style={{
            fontSize: "4rem",
          }}
        >
          Simple Pricing.
          <span className="gradient-text">
            {" "}Powerful Trading.
          </span>
        </h1>

        <p
          className="mx-auto mt-4"
          style={{
            maxWidth: "700px",
            color: "#94a3b8",
            lineHeight: "1.9",
            fontSize: "1.1rem",
          }}
        >
          No hidden fees. No complicated charges.
          Experience modern investing with lightning-fast execution
          and industry-leading pricing.
        </p>
      </div>

     

      <div className="row g-4 mt-3">

       

        <div className="col-lg-4">

          <div className="modern-price-card">

            <div className="pricing-icon">
              <FaChartLine />
            </div>

            <h3 className="mt-4 text-white">
              Free Equity Delivery
            </h3>

            <h1 className="price-gradient mt-3">
              ₹0
            </h1>

            <p className="pricing-text mt-4">
              Invest in equities with zero brokerage charges
              across NSE and BSE markets.
            </p>

          </div>
        </div>

      

        <div className="col-lg-4">

          <div className="modern-price-card active-price-card">

            <div className="pricing-icon">
              <FaBolt />
            </div>

            <h3 className="mt-4 text-white">
              Intraday & F&O
            </h3>

            <h1 className="price-gradient mt-3">
              ₹20
            </h1>

            <p className="pricing-text mt-4">
              Flat brokerage for intraday, futures,
              commodities, and options trading.
            </p>

          </div>
        </div>

      

        <div className="col-lg-4">

          <div className="modern-price-card">

            <div className="pricing-icon">
              <FaCoins />
            </div>

            <h3 className="mt-4 text-white">
              Direct Mutual Funds
            </h3>

            <h1 className="price-gradient mt-3">
              ₹0
            </h1>

            <p className="pricing-text mt-4">
              Invest in direct mutual funds with
              zero commissions and hidden charges.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;