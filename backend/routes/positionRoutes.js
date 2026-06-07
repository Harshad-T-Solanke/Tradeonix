const express = require("express");
const router = express.Router();

const { PositionsModel } = require("../model/PositionsModel");

router.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

module.exports = router;