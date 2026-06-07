const { Schema } = require("mongoose");

const WatchlistSchema = new Schema({
  userId: String,
  name: String,
  price: Number,
  percent: {
    type: String,
    default: "+0.00%",
  },
  isDown: {
    type: Boolean,
    default: false,
  },
});

module.exports = { WatchlistSchema };