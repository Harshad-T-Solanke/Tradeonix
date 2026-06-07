

const express = require("express");
const router = express.Router();

const { HoldingsModel } = require("../model/HoldingsModel");

router.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

router.get("/portfolioSummary", async (req, res) => {
  const holdings = await HoldingsModel.find({});

  let invested = 0;
  let current = 0;

  holdings.forEach((stock) => {
    invested += stock.avg * stock.qty;
    current += stock.price * stock.qty;
  });

  const profit = current - invested;

  res.json({
    invested,
    current,
    profit,
    holdingsCount: holdings.length,
  });
});

module.exports = router;