const express = require("express");
const router = express.Router();

const { OrdersModel } = require("../model/OrdersModel");

const { HoldingsModel } =
  require("../model/HoldingsModel");

router.get("/allOrders", async (req, res) => {
  const orders = await OrdersModel.find({});
  res.json(orders);
});

router.post("/newOrder", async (req, res) => {

  const newOrder = new OrdersModel({
    userId: req.body.userId,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: "BUY",
  });

  await newOrder.save();

  const existingHolding =
    await HoldingsModel.findOne({
      name: req.body.name,
    });

  if (existingHolding) {

    existingHolding.qty =
      existingHolding.qty +
      Number(req.body.qty);

    existingHolding.price =
      Number(req.body.price);

    await existingHolding.save();

  } else {

    const newHolding =
      new HoldingsModel({
        name: req.body.name,
        qty: req.body.qty,
        avg: req.body.price,
        price: req.body.price,
        net: "+0.00%",
        day: "+0.00%",
      });

    await newHolding.save();
  }

  res.json({
    message: "Buy Order Saved",
  });
});

router.post("/sellOrder", async (req, res) => {

  const order = new OrdersModel({
    userId: req.body.userId,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: "SELL",
  });

  await order.save();

  const holding =
    await HoldingsModel.findOne({
      name: req.body.name,
    });

  if (holding) {

    holding.qty =
      holding.qty -
      Number(req.body.qty);

    if (holding.qty <= 0) {

      await HoldingsModel.deleteOne({
        _id: holding._id,
      });

    } else {

      await holding.save();

    }
  }

  res.json({
    message: "Sell Order Saved",
  });
});

router.get("/userOrders/:userId", async (req, res) => {

  const orders = await OrdersModel.find({
    userId: req.params.userId,
  });

  res.json(orders);

});

module.exports = router;