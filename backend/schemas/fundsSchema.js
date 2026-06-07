const { Schema } = require("mongoose");

const FundsSchema = new Schema({
  userId: String,

  amount: Number,

  type: String, // DEPOSIT or WITHDRAW

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { FundsSchema };