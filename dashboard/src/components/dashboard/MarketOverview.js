import React from "react";

const MarketOverview = () => {

const gainers = [
{
name: "TCS",
change: "+2.45%",
},
{
name: "RELIANCE",
change: "+1.85%",
},
{
name: "SBIN",
change: "+3.20%",
},
];

const losers = [
{
name: "INFY",
change: "-0.84%",
},
{
name: "ITC",
change: "-0.42%",
},
{
name: "HDFCBANK",
change: "-0.15%",
},
];

return ( <div className="market-page">

  <h2>Market Overview</h2>

  <div className="analytics-cards">

    <div className="analytics-card">
      <p>NIFTY 50</p>
      <h3 className="profit">
        +2.45%
      </h3>
    </div>

    <div className="analytics-card">
      <p>SENSEX</p>
      <h3 className="profit">
        +1.85%
      </h3>
    </div>

    <div className="analytics-card">
      <p>BANKNIFTY</p>
      <h3 className="loss">
        -0.84%
      </h3>
    </div>

  </div>

  <div className="market-section">

    <div className="market-card">

      <h3>Top Gainers</h3>

      {gainers.map((stock, index) => (

        <div
          key={index}
          className="market-stock-row"
        >
          <span>{stock.name}</span>

          <span className="profit">
            {stock.change}
          </span>
        </div>

      ))}

    </div>

    <div className="market-card">

      <h3>Top Losers</h3>

      {losers.map((stock, index) => (

        <div
          key={index}
          className="market-stock-row"
        >
          <span>{stock.name}</span>

          <span className="loss">
            {stock.change}
          </span>
        </div>

      ))}

    </div>

  </div>

</div>


);
};

export default MarketOverview;
