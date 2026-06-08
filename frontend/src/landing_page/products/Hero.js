import React from "react";

function Hero() {
  return (
    <section className="container py-5">

      <div className="products-hero-card text-center">

       

        <div className="products-glow-1"></div>
        <div className="products-glow-2"></div>

       

        <div className="position-relative" style={{ zIndex: 2 }}>

          <p className="products-tag">
            NEXT GENERATION TRADING
          </p>

          <h1 className="products-title">
            Tradeonix
            <span> Products</span>
          </h1>

          <p className="products-subtitle">
            Sleek, intelligent, and lightning-fast platforms
            built for modern traders and investors.
          </p>

        

          <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">

            <button className="neo-primary-btn">
              Explore Products
            </button>

            <button className="neo-secondary-btn">
              Investment Offerings
            </button>

          </div>

        

          <div className="row mt-5 pt-4">

            <div className="col-md-4 mb-4">
              <div className="mini-card">
                <h2>10M+</h2>
                <p>Trades Executed Daily</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="mini-card">
                <h2>99.9%</h2>
                <p>Platform Uptime</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="mini-card">
                <h2>₹0</h2>
                <p>Commission Investing</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;