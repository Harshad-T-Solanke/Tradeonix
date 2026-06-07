import React from "react";
import "../../styles/pricing.css";
import {
  FaChartLine,
  FaShieldAlt,
  FaBolt,
  FaArrowRight,
} from "react-icons/fa";

function Brokerage() {
  return (
    <section className="container py-5">

      {/* TOP HEADING */}

      <div className="text-center mb-5">

        <p className="brokerage-tag">
          TRANSPARENT PRICING
        </p>

        <h1 className="brokerage-main-title">
          Brokerage Built For
          <span> Modern Traders</span>
        </h1>

        <p className="brokerage-subtitle">
          Experience ultra-low brokerage, lightning-fast execution,
          and institutional-grade infrastructure designed for modern investors.
        </p>

      </div>

      {/* MAIN CARD */}

      <div className="brokerage-wrapper">

        <div className="row align-items-center">

          {/* LEFT */}

          <div className="col-lg-7">

            <div className="brokerage-content">

              <div className="brokerage-item">
                <FaChartLine className="brokerage-icon" />

                <div>
                  <h5>Advanced Trading Infrastructure</h5>

                  <p>
                    Optimized execution engine with real-time market connectivity.
                  </p>
                </div>
              </div>

              <div className="brokerage-item">
                <FaShieldAlt className="brokerage-icon" />

                <div>
                  <h5>Secure & Transparent</h5>

                  <p>
                    No hidden charges, no surprises, and complete fee transparency.
                  </p>
                </div>
              </div>

              <div className="brokerage-item">
                <FaBolt className="brokerage-icon" />

                <div>
                  <h5>Lightning Fast Orders</h5>

                  <p>
                    Execute trades instantly with high-performance systems.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}

          <div className="col-lg-5">

            <div className="brokerage-price-card">

              <p className="price-label">
                STARTING FROM
              </p>

              <h1 className="brokerage-price">
                ₹20
              </h1>

              <p className="price-desc">
                Flat brokerage for intraday and F&O trades.
              </p>

              <button className="brokerage-btn">
                Explore Pricing
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}

export default Brokerage;