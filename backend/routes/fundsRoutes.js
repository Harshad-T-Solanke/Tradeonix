const express = require("express");
const router = express.Router();

const { FundsModel } = require("../model/FundsModel");


router.post(
  "/addFunds",
  async (req, res) => {

    const fund = new FundsModel({
      userId: req.body.userId,
      amount: req.body.amount,
      type: "DEPOSIT",
    });

    await fund.save();

    res.json({
      message: "Funds Added",
    });
  }
);



router.post(
  "/withdrawFunds",
  async (req, res) => {

    const fund = new FundsModel({
      userId: req.body.userId,
      amount: req.body.amount,
      type: "WITHDRAW",
    });

    await fund.save();

    res.json({
      message: "Funds Withdrawn",
    });
  }
);



router.get(
  "/funds/:userId",
  async (req, res) => {

    const funds =
      await FundsModel.find({
        userId: req.params.userId,
      });

    res.json(funds);
  }
);

module.exports = router;