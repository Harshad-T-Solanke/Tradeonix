const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get(
  "/marketNews",
  async (req, res) => {

    try {

      const response =
        await axios.get(
          `https://newsapi.org/v2/everything?q=stock market OR nifty OR sensex OR india business&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
        );

      res.json(
        response.data.articles
      );

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message:
          "Unable to fetch news",
      });

    }

  }
);

module.exports = router;