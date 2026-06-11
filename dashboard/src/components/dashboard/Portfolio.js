import React,
{
  useEffect,
  useState,
} from "react";

import jsPDF from "jspdf";

import axios from "axios";

const Portfolio = () => {

  const [stats, setStats] =
    useState(null);

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "Tradeonix Portfolio Report",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Total Stocks: ${stats.totalStocks}`,
      20,
      50
    );

    doc.text(
      `Total Quantity: ${stats.totalQty}`,
      20,
      70
    );

    doc.text(
      `Portfolio Value: ₹${stats.portfolioValue.toFixed(2)}`,
      20,
      90
    );

    doc.text(
      `Top Gainer: ${
        stats.topGainer
          ? stats.topGainer.name
          : "-"
      }`,
      20,
      110
    );

    doc.text(
      `Top Loser: ${
        stats.topLoser
          ? stats.topLoser.name
          : "-"
      }`,
      20,
      130
    );

    doc.save(
      "Tradeonix_Portfolio_Report.pdf"
    );

  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:3002/portfolioStats"
      )
      .then((res) => {
        setStats(res.data);
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
      <button
  className="download-report-btn"
  onClick={downloadPDF}
>
  Download Portfolio Report
</button>

    </div>

  );
};

export default Portfolio;
