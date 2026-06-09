const express = require("express");
const router = express.Router();

const YahooFinance =
  require("yahoo-finance2").default;

const yahooFinance =
  new YahooFinance();

const stockMap = {
  TCS: "TCS.NS",
  INFY: "INFY.NS",
  RELIANCE: "RELIANCE.NS",
  HDFCBANK: "HDFCBANK.NS",
  ITC: "ITC.NS",
  SBIN: "SBIN.NS",
};

router.get(
  "/market/:symbol",
  async (req, res) => {

    try {

      const symbol =
        req.params.symbol.toUpperCase();

      const yahooSymbol =
        stockMap[symbol];

      if (!yahooSymbol) {

        return res.status(404).json({
          message:
            "Stock not supported",
        });

      }

      const quote =
        await yahooFinance.quote(
          yahooSymbol
        );

      const percent =
        quote.regularMarketChangePercent || 0;

      res.json({
        symbol,
        price:
          quote.regularMarketPrice,

        percent:
          `${percent.toFixed(2)}%`,

        isDown:
          percent < 0,
      });

    } catch (err) {

      console.log(
        "MARKET ERROR:",
        err
      );

      res.status(500).json({
        message:
          "Unable to fetch market data",
      });

    }

  }
);

router.get(
  "/indices",
  async (req, res) => {

    try {

      const YahooFinance =
        require("yahoo-finance2").default;

      const yahoo =
        new YahooFinance({
          suppressNotices: [
            "yahooSurvey",
          ],
        });

      const nifty =
        await yahoo.quote("^NSEI");

      const sensex =
        await yahoo.quote("^BSESN");

      res.json({
        nifty: {
          price:
            nifty.regularMarketPrice,
          percent:
            nifty.regularMarketChangePercent?.toFixed(
              2
            ),
        },

        sensex: {
          price:
            sensex.regularMarketPrice,
          percent:
            sensex.regularMarketChangePercent?.toFixed(
              2
            ),
        },
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Unable to fetch indices",
      });

    }

  }
);

module.exports = router;