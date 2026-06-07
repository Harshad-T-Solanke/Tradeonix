const express = require("express");
const router = express.Router();

const {
  WatchlistModel,
} = require("../model/WatchlistModel");

router.get(
  "/watchlist/:userId",
  async (req, res) => {

    const watchlist =
      await WatchlistModel.find({
        userId: req.params.userId,
      });

    res.json(watchlist);
  }
);

router.post(
  "/watchlist/add",
  async (req, res) => {

    const stock =
      new WatchlistModel({
        userId: req.body.userId,
        name: req.body.name,
        price: req.body.price,
      });

    await stock.save();

    res.json({
      message: "Added",
    });
  }
);

router.delete(
  "/watchlist/:id",
  async (req, res) => {

    await WatchlistModel.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Deleted",
    });
  }
);

router.post(
  "/addWatchlist",
  async (req, res) => {

    const stock =
      new WatchlistModel({
        userId: req.body.userId,
        name: req.body.name,
        price: req.body.price,
      });

    await stock.save();

    res.json({
      message: "Stock Added",
    });

  }
);

module.exports = router;