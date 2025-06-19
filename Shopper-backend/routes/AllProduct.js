const express = require("express");
const router = express.Router();
const app = express();
const User = require("../models/Product");

router.get("/Allproduct", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/Allproduct", async (req, res) => {
  console.log("received data");
  try {
    const { name, price, description, image, category, stock } = req.body;
    const newProduct = new User({ name, price, description, image, category, stock });
    console.log(newProduct);
    await newProduct.save();
    res.status(200).json({ success: true, product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
