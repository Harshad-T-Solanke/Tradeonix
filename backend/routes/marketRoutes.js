const express = require("express");
const router = express.Router();
const axios = require("axios");

const stockMap = {
  TCS: "TCS",
  INFY: "INFY",
  RELIANCE: "RELIANCE",
  HDFCBANK: "HDFCBANK",
  ITC: "ITC",
  SBIN: "SBIN",
};

router.get("/market/:symbol", async (req, res) => {

  try {

    const symbol =
      req.params.symbol.toUpperCase();

    const stockSymbol =
      stockMap[symbol];

    if (!stockSymbol) {

      return res.status(404).json({
        message: "Stock not supported",
      });

    }

    const response =
      await axios.get(
        `https://api.twelvedata.com/quote?symbol=${stockSymbol}&exchange=NSE&apikey=${process.env.TWELVE_API_KEY}`
      );

    const stock =
      response.data;

    console.log(stock);

    if (stock.status === "error") {

      return res.status(400).json(stock);

    }

    res.json({
      symbol,
      price:
        Number(stock.close),

      percent:
        `${stock.percent_change}%`,

      isDown:
        Number(stock.percent_change) < 0,
    });

  } catch (err) {

    console.log(
      "TWELVE ERROR:",
      err.response?.data || err.message
    );

    res.status(500).json({
      message:
        "Unable to fetch market data",
    });

  }

});

module.exports = router;