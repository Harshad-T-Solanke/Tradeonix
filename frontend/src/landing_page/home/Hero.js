import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartLine,
  FaShieldAlt,
  FaBolt,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="neo-hero">

    
      <div className="neo-glow-1"></div>
      <div className="neo-glow-2"></div>

      

      <div className="floating-badge badge-1">
        <FaChartLine /> +12.5%
      </div>

      <div className="floating-badge badge-2">
        <FaBolt /> Ultra Fast
      </div>

    

      <div className="neo-content">

        <div className="market-live">
          ● LIVE MARKET • NSE • CRYPTO • FOREX
        </div>

        <h1 className="neo-title">
          NEXT GEN
          <br />
          <span>TRADING</span>
        </h1>

        <p className="neo-subtitle">
          Experience lightning-fast execution, AI-powered analytics,
          and futuristic investing tools built for modern traders.
        </p>

      

        <div className="neo-buttons">

          <Link to="/signup">
            <button className="neo-primary-btn">
              Launch Platform
              <FaArrowRight className="ms-2" />
            </button>
          </Link>

          <button className="neo-secondary-btn">
            Watch Demo
          </button>

        </div>

     

        <div className="hero-stats">

          <div className="hero-stat-card">
            <h3>10M+</h3>
            <p>Daily Trades</p>
          </div>

          <div className="hero-stat-card">
            <h3>99.99%</h3>
            <p>Platform Uptime</p>
          </div>

          <div className="hero-stat-card">
            <h3>₹0</h3>
            <p>Account Opening</p>
          </div>

        </div>

      </div>

  

      <div className="terminal-box">

      

        <div className="terminal-header">

          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <p>Tradeonix Terminal</p>

          <div className="terminal-status">
            <FaShieldAlt />
            Secure
          </div>

        </div>

      

        <div className="terminal-body">

          <div className="ticker-row green">
            <span>NIFTY 50</span>
            <span>+2.45%</span>
          </div>

          <div className="ticker-row red">
            <span>BANKNIFTY</span>
            <span>-0.84%</span>
          </div>

          <div className="ticker-row green">
            <span>BTC/USDT</span>
            <span>+5.13%</span>
          </div>

          <div className="ticker-row green">
            <span>RELIANCE</span>
            <span>+1.23%</span>
          </div>

    

         <div className="chart-box">

 
  <div className="chart-overlay">
    LIVE ANALYTICS
  </div>



  <div className="chart-gradient"></div>

 
  <div className="chart-side-card left-card">

    <p>Portfolio Value</p>

    <h2>₹8.42L</h2>

    <span>+12.8% this month</span>

  </div>



  <div className="chart-side-card right-card">

    <p>Market Sentiment</p>

    <h2>Bullish</h2>

    <span>AI confidence 92%</span>

  </div>

 
  <div className="chart-image-wrapper">

    <img
      src="/media/images/homeHero.png"
      alt="Trading Dashboard"
      className="chart-image"
    />

  </div>


  <div className="chart-bottom-card">

    <div>
      <p>Profit Today</p>
      <h3>+₹12,480</h3>
    </div>

    <div>
      <p>Win Rate</p>
      <h3>84%</h3>
    </div>

    <div>
      <p>Trades</p>
      <h3>142</h3>
    </div>

  </div>

</div>

        </div>

      </div>

    </section>
  );
}

export default Hero;

