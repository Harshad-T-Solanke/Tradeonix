const { Schema } = require("mongoose");

const NotificationSchema = new Schema({
  userId: String,
  title: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = { NotificationSchema };