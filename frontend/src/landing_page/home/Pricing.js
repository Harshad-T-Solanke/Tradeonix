import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function Pricing() {
  return (
    <section className="container py-5">

      

      <div className="text-center mb-5">

        <h1
          className="fw-bold"
          style={{
            fontSize: "3rem",
          }}
        >
          Simple &
          <span className="gradient-text"> Transparent </span>
          Pricing
        </h1>

        <p
          className="mt-3"
          style={{
            color: "#94a3b8",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          No hidden charges. No complicated plans.
          Experience modern investing with affordable pricing
          designed for every trader.
        </p>
      </div>

    

      <div className="row g-4">

       

        <div className="col-md-4">

          <div className="pricing-card h-100">

            <div className="pricing-badge">
              Beginner Friendly
            </div>

            <h1 className="price-text mt-4">
              ₹0
            </h1>

            <h4 className="mt-3 text-white">
              Equity Delivery
            </h4>

            <p className="pricing-desc">
              Invest in stocks and mutual funds with zero brokerage.
            </p>

            <div className="pricing-features">

              <p>
                <FaCheckCircle className="check-icon" />
                Free account opening
              </p>

              <p>
                <FaCheckCircle className="check-icon" />
                Direct mutual funds
              </p>

              <p>
                <FaCheckCircle className="check-icon" />
                Long-term investing
              </p>

            </div>

          </div>
        </div>

    

        <div className="col-md-4">

          <div className="pricing-card active-card h-100">

            <div className="pricing-badge">
              Most Popular
            </div>

            <h1 className="price-text mt-4">
              ₹20
            </h1>

            <h4 className="mt-3 text-white">
              Intraday & F&O
            </h4>

            <p className="pricing-desc">
              Flat fee trading for intraday, futures, and options.
            </p>

            <div className="pricing-features">

              <p>
                <FaCheckCircle className="check-icon" />
                Ultra-fast execution
              </p>

              <p>
                <FaCheckCircle className="check-icon" />
                Advanced charts
              </p>

              <p>
                <FaCheckCircle className="check-icon" />
                Real-time analytics
              </p>

            </div>

          </div>
        </div>

        

        <div className="col-md-4">

          <div className="pricing-card h-100">

            <div className="pricing-badge">
              Premium
            </div>

            <h1 className="price-text mt-4">
              Pro
            </h1>

            <h4 className="mt-3 text-white">
              Advanced Trading Suite
            </h4>

            <p className="pricing-desc">
              AI-powered insights and advanced portfolio management.
            </p>

            <div className="pricing-features">

              <p>
                <FaCheckCircle className="check-icon" />
                AI stock analysis
              </p>

              <p>
                <FaCheckCircle className="check-icon" />
                Portfolio insights
              </p>

              <p>
                <FaCheckCircle className="check-icon" />
                Premium support
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;