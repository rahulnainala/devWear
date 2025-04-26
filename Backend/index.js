const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const item = require("./schema/items");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

//Mongoose Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/products/productDescription/*id", async (req, res) => {
  try {
    const { id } = req.params;
    const productDetails = await item.findById(id);
    res.json(productDetails);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

//get call for shoes
app.get("/api/products/shoes", async (req, res) => {
  try {
    const products = await item.find({ category: "shoes" });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

//get call for pants
app.get("/api/products/pants", async (req, res) => {
  try {
    const products = await item.find({ category: "pants" });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

//get call for shirts
app.get("/api/products/shirts", async (req, res) => {
  try {
    const products = await item.find({ category: "shirts" });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

//get call for tshirts
app.get("/api/products/tshirts", async (req, res) => {
  try {
    const products = await item.find({ category: "tshirts" });
    res.json(products);
  } catch (error) {
    console.error("Error fetching products", error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
