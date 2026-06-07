import React from "react";

const partners = [
  {
    image: "/media/images/smallcaseLogo.png",
    title: "Smart Investing",
    desc: "Invest in diversified baskets of stocks and ETFs with thematic investing.",
  },

  {
    image: "/media/images/streakLogo.png",
    title: "Algo Strategies",
    desc: "Create and backtest trading strategies without writing code.",
  },

  {
    image: "/media/images/sensibullLogo.svg",
    title: "Options Analytics",
    desc: "Analyze positions, open interest, and advanced options data.",
  },

  {
    image: "/media/images/zerodhaFundhouse.png",
    title: "Mutual Funds",
    desc: "Discover curated investment opportunities with modern fund management.",
  },

  {
    image: "/media/images/dittoLogo.png",
    title: "Insurance Tech",
    desc: "Smart insurance solutions integrated into your investing journey.",
  },

  {
    image: "/media/images/smallcaseLogo.png",
    title: "Advanced Portfolios",
    desc: "Build long-term wealth with professionally managed portfolios.",
  },
];

function Universe() {
  return (
    <section className="container py-5">

      {/* HEADING */}

      <div className="text-center mb-5">

        <p className="universe-tag">
          TRADEONIX ECOSYSTEM
        </p>

        <h1
          className="fw-bold"
          style={{
            fontSize: "3rem",
          }}
        >
          The
          <span className="gradient-text">
            {" "}Tradeonix Universe
          </span>
        </h1>

        <p
          className="mx-auto mt-4"
          style={{
            maxWidth: "700px",
            color: "#94a3b8",
            lineHeight: "1.8",
          }}
        >
          Extend your trading and investment experience
          with powerful fintech tools and partner platforms.
        </p>
      </div>

      {/* GRID */}

      <div className="row g-4">

        {partners.map((partner, index) => (

          <div className="col-md-4" key={index}>

            <div className="universe-card h-100 text-center">

              <img
                src={partner.image}
                alt={partner.title}
                className="universe-logo"
              />

              <h5 className="mt-4 text-white">
                {partner.title}
              </h5>

              <p className="universe-desc">
                {partner.desc}
              </p>

            </div>
          </div>

        ))}

      </div>

      {/* BUTTON */}

      <div className="text-center mt-5">

        <button className="neo-primary-btn">
          Explore Ecosystem
        </button>

      </div>
    </section>
  );
}

export default Universe;