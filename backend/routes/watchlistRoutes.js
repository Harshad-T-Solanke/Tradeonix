const express = require("express");
const router = express.Router();

const {
  WatchlistModel,
} = require("../model/WatchlistModel");

const {
  NotificationModel,
} = require("../model/NotificationModel");

router.get(
  "/watchlist/:userId",
  async (req, res) => {

    try {

      const watchlist =
        await WatchlistModel.find({
          userId: req.params.userId,
        });

      res.json(watchlist);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: err.message,
      });

    }

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

    await NotificationModel.create({
  userId: req.body.userId,
  message: `${req.body.name} added to watchlist`,
});

    res.json({
      message: "Added",
    });
  }
);

router.delete(
  "/watchlist/:id",
  async (req, res) => {

    const stock =
  await WatchlistModel.findById(
    req.params.id
  );

if (stock) {

  await NotificationModel.create({
    userId: stock.userId,
    message: `${stock.name} removed from watchlist`,
  });

  await WatchlistModel.findByIdAndDelete(
    req.params.id
  );
}

res.json({
  message: "Deleted",
});
  }
);

router.post(
  "/addWatchlist",
  async (req, res) => {

    console.log("BODY:", req.body);

    const stock =
      new WatchlistModel({
        userId: req.body.userId,
        name: req.body.name,
        price: req.body.price,
      });

    await stock.save();

await NotificationModel.create({
  userId: req.body.userId,
  message: `${req.body.name} added to watchlist`,
});

console.log("SAVED:", stock);

res.json({
  message: "Stock Added",
});

  }
);

module.exports = router;