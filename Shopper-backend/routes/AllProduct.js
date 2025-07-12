const express = require("express");
const router = express.Router();
const app = express();
const Product = require("../models/Product");

router.get("/Allproduct", async (req, res) => {
  try {
    const Products = await Product.find();
    res.status(200).json(Products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/Allproduct", async (req, res) => {
  console.log("received data");
  try {
    const { name, price, marketPrice, discount, description, image, category, stock, topProduct,newestProduct } = req.body;
    const newProduct = new Product({ name, price, marketPrice, discount, description, image, category, stock, topProduct,newestProduct });
    console.log(newProduct);
    await newProduct.save();
    res.status(200).json({ success: true, product: newProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/top-products', async (req, res) => {
  try {
    const products = await Product.find({ topProduct: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: All newest products
router.get('/newest-products', async (req, res) => {
  try {
    const products = await Product.find({ newestProduct: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
