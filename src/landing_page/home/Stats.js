import React from "react";
import {
  FaShieldAlt,
  FaBolt,
  FaChartLine,
  FaWallet,
} from "react-icons/fa";

function Stats() {
  return (
    <section className="container py-5">

      <div className="row align-items-center g-5">

        {/* LEFT CONTENT */}

        <div className="col-lg-6">

          <div className="mb-5">

            <h1
              className="fw-bold"
              style={{
                fontSize: "3rem",
                lineHeight: "1.3",
              }}
            >
              Trade with
              <span className="gradient-text">
                {" "}Confidence
              </span>
            </h1>

            <p
              className="mt-4"
              style={{
                color: "#94a3b8",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              Experience a next-generation investing platform built for
              speed, security, and smarter financial decisions.
            </p>
          </div>

          {/* FEATURE CARDS */}

          <div className="row g-4">

            <div className="col-md-6">
              <div className="stats-card">

                <FaShieldAlt className="stats-icon" />

                <h5>Secure Trading</h5>

                <p>
                  Advanced encryption and multi-layer security
                  for safe investing.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="stats-card">

                <FaBolt className="stats-icon" />

                <h5>Lightning Fast</h5>

                <p>
                  Execute trades instantly with ultra-fast
                  order processing.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="stats-card">

                <FaChartLine className="stats-icon" />

                <h5>Smart Analytics</h5>

                <p>
                  Real-time market insights and advanced
                  portfolio analytics.
                </p>

              </div>
            </div>

            <div className="col-md-6">
              <div className="stats-card">

                <FaWallet className="stats-icon" />

                <h5>Wealth Growth</h5>

                <p>
                  Build long-term wealth with powerful
                  investing tools.
                </p>

              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="col-lg-6 text-center">

          <img
            src="/media/images/ecosystem.png"
            alt="Trading Dashboard"
            className="img-fluid"
            style={{
              width: "95%",
              filter:
                "drop-shadow(0px 20px 40px rgba(0,212,255,0.25))",
            }}
          />

          {/* BUTTONS */}

          <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">

            <button className="primary-btn">
              Explore Products
            </button>

            <button className="explore-btn">
              Live Demo
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;