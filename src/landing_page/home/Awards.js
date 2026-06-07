import React from "react";

function Awards() {
  return (
    <section className="container py-5">

      <div className="row align-items-center g-5">

        {/* LEFT IMAGE */}

        <div className="col-lg-6">

          <div className="award-image-card">

            <img
              src="/media/images/largestBroker.svg"
              alt="Trading"
              className="img-fluid"
            />

          </div>

        </div>

        {/* RIGHT CONTENT */}

        <div className="col-lg-6">

          <div className="glass p-5">

            {/* BADGE */}

            <div className="trade-badge mb-4">
              📈 India's Fastest Growing Trading Platform
            </div>

            {/* TITLE */}

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "3rem",
                lineHeight: "1.2",
              }}
            >
              Built For
              <span className="gradient-text">
                {" "}Modern Investors
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p
              style={{
                color: "#94a3b8",
                lineHeight: "1.9",
                fontSize: "1.05rem",
              }}
            >
              Millions of traders trust Tradeonix for
              lightning-fast execution, smart analytics,
              and seamless investing experience.
            </p>

            {/* FEATURE CARDS */}

            <div className="row mt-5 g-4">

              <div className="col-md-6">
                <div className="mini-card h-100">
                  <h5>⚡ F&O Trading</h5>
                  <p>
                    Ultra-fast order execution with real-time analytics.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mini-card h-100">
                  <h5>📊 Smart Investing</h5>
                  <p>
                    Invest in stocks, ETFs, IPOs, and mutual funds.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mini-card h-100">
                  <h5>💹 Live Market Data</h5>
                  <p>
                    Real-time market updates and advanced charts.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mini-card h-100">
                  <h5>🔒 Secure Platform</h5>
                  <p>
                    Enterprise-grade security and encrypted trading.
                  </p>
                </div>
              </div>

            </div>

            {/* PRESS LOGOS */}

            <div className="mt-5 text-center">
              <img
                src="/media/images/pressLogos.png"
                alt="Press"
                style={{
                  width: "85%",
                  opacity: "0.8",
                }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;