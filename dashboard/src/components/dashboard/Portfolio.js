import React,
{
  useEffect,
  useState,
} from "react";

import axios from "axios";

const Portfolio = () => {

  const [summary,
    setSummary] =
    useState(null);

  useEffect(() => {

    axios
      .get(
        "http://localhost:3002/portfolioSummary"
      )
      .then((res) => {

        setSummary(
          res.data
        );

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  if (!summary)
    return <h3>Loading...</h3>;

  return (

    <div className="portfolio-page">

      <h2>
        Portfolio Overview
      </h2>

      <div className="portfolio-grid">

        <div className="portfolio-card">

          <h4>
            Total Investment
          </h4>

          <h2>
            ₹
            {
              summary.invested.toFixed(2)
            }
          </h2>

        </div>

        <div className="portfolio-card">

          <h4>
            Current Value
          </h4>

          <h2>
            ₹
            {
              summary.current.toFixed(2)
            }
          </h2>

        </div>

        <div className="portfolio-card">

          <h4>
            Profit / Loss
          </h4>

          <h2
            className={
              summary.profit >= 0
                ? "profit"
                : "loss"
            }
          >
            ₹
            {
              summary.profit.toFixed(2)
            }
          </h2>

        </div>

        <div className="portfolio-card">

          <h4>
            Total Holdings
          </h4>

          <h2>
            {
              summary.holdingsCount
            }
          </h2>

        </div>

      </div>

    </div>

  );
};

export default Portfolio;