const express = require("express");
const router = express.Router();

const {
  NotificationModel,
} = require("../model/NotificationModel");

router.get(
  "/notifications/:userId",
  async (req, res) => {
    try {

      const notifications =
        await NotificationModel.find({
          userId: req.params.userId,
        }).sort({
          createdAt: -1,
        });

      res.json(notifications);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });

    }
  }
);

module.exports = router;