const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  WatchlistModel,
} = require("../model/WatchlistModel");

const { UserModel } = require("../model/UserModel");

router.post("/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser =
      await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    await WatchlistModel.insertMany([
  {
    userId: newUser._id,
    name: "TCS",
    price: 3500,
  },
  {
    userId: newUser._id,
    name: "INFY",
    price: 1500,
  },
  {
    userId: newUser._id,
    name: "RELIANCE",
    price: 2800,
  },
  {
    userId: newUser._id,
    name: "HDFCBANK",
    price: 1700,
  },
]);

    res.status(201).json({
      message: "Signup successful",
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Server Error",
    });

  }

});

router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user =
    await UserModel.findOne({ email });

  if (!user)
    return res.status(400).send("User not found!");

  const isMatch =
    await bcrypt.compare(
      password,
      user.password
    );

  if (!isMatch)
    return res.status(400).send("Invalid password!");

  

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    token,
    name: user.name,
    userId: user._id,
  });

});

module.exports = router;