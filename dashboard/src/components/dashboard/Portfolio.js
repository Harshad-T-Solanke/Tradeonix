import React,
{
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Portfolio = () => {

  const [stats,
    setStats] =
    useState(null);

  useEffect(() => {

    axios
      .get(
        "http://localhost:3002/portfolioStats"
      )
      .then((res) => {

        setStats(
          res.data
        );

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  if (!stats)
    return <h3>Loading...</h3>;

  return (

    <div className="portfolio-page">

      <h2>
        Portfolio Overview
      </h2>

      <div className="portfolio-grid">

        <div className="portfolio-card">

          <h4>
            Total Stocks
          </h4>

          <h2>
            {stats.totalStocks}
          </h2>

        </div>

        <div className="portfolio-card">

          <h4>
            Total Quantity
          </h4>

          <h2>
            {stats.totalQty}
          </h2>

        </div>

        <div className="portfolio-card">

          <h4>
            Portfolio Value
          </h4>

          <h2>
            ₹
            {stats.portfolioValue.toFixed(2)}
          </h2>

        </div>

        <div className="portfolio-card">

          <h4>
            Top Gainer
          </h4>

          <h2 className="profit">

            {
              stats.topGainer
                ? stats.topGainer.name
                : "-"
            }

          </h2>

          <p>

            {
              stats.topGainer
                ? stats.topGainer.net
                : "-"
            }

          </p>

        </div>

        <div className="portfolio-card">

          <h4>
            Top Loser
          </h4>

          <h2 className="loss">

            {
              stats.topLoser
                ? stats.topLoser.name
                : "-"
            }

          </h2>

          <p>

            {
              stats.topLoser
                ? stats.topLoser.net
                : "-"
            }

          </p>

        </div>

      </div>

    </div>

  );
};

export default Portfolio;