require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;


const fundsRoutes =
require("./routes/fundsRoutes");

const authRoutes =
  require("./routes/authRoutes");

const orderRoutes =
  require("./routes/orderRoutes");

const holdingRoutes =
  require("./routes/holdingRoutes");

const positionRoutes =
  require("./routes/positionRoutes");

const {
  WatchlistModel,
} = require("./model/WatchlistModel");

const watchlistRoutes =
require("./routes/watchlistRoutes");

const marketRoutes =
  require("./routes/marketRoutes");

const notificationsRoutes =
  require("./routes/notificationsRoutes");

const portfolioRoutes =
  require("./routes/portfolioRoutes");

app.use(notificationsRoutes);
app.use(marketRoutes);
app.use(authRoutes);
app.use(orderRoutes);
app.use(holdingRoutes);
app.use(positionRoutes);
app.use(watchlistRoutes);
app.use(fundsRoutes);
app.use(portfolioRoutes);

app.post(
  "/watchlist",
  async (req, res) => {

    const item = new WatchlistModel({
      userId: req.body.userId,
      stockName: req.body.stockName,
    });

    await item.save();

    res.json({
      message: "Added Successfully",
    });
  }
);

app.get(
  "/watchlist/:userId",
  async (req, res) => {

    const watchlist =
      await WatchlistModel.find({
        userId: req.params.userId,
      });

    res.json(watchlist);
  }
);


mongoose
  .connect(uri)
  .then(() => {

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(
        `Server running on ${PORT}`
      );
    });

  })
  .catch((err) => {
    console.log(err);
  });