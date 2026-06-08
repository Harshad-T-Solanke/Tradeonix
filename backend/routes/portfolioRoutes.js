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

module.exports = router;