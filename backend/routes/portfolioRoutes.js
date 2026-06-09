const express = require("express");
const router = express.Router();

const {
  HoldingsModel,
} = require("../model/HoldingsModel");

router.get(
  "/portfolioPerformance",
  async (req, res) => {

    try {

      const holdings =
        await HoldingsModel.find({});

      let current = 0;

      holdings.forEach((stock) => {

        current +=
          stock.price *
          stock.qty;

      });

      const data = [
        current * 0.75,
        current * 0.82,
        current * 0.79,
        current * 0.88,
        current * 0.93,
        current,
      ];

      res.json(data);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });

    }

  }
);


router.get(
  "/portfolioStats",
  async (req, res) => {

    try {

      const holdings =
        await HoldingsModel.find({});

      let totalStocks =
        holdings.length;

      let totalQty = 0;

      let portfolioValue = 0;

      holdings.forEach((stock) => {

        totalQty +=
          Number(stock.qty);

        portfolioValue +=
          Number(stock.price) *
          Number(stock.qty);

      });

      let topGainer =
        holdings.length > 0
          ? holdings[0]
          : null;

      let topLoser =
        holdings.length > 0
          ? holdings[0]
          : null;

      holdings.forEach((stock) => {

        const net =
          parseFloat(
            stock.net || "0"
          );

        if (
          parseFloat(
            topGainer?.net || "0"
          ) < net
        ) {
          topGainer = stock;
        }

        if (
          parseFloat(
            topLoser?.net || "0"
          ) > net
        ) {
          topLoser = stock;
        }

      });

      res.json({
        totalStocks,
        totalQty,
        portfolioValue,
        topGainer,
        topLoser,
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });

    }

  }
);

module.exports = router;