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

//get call
app.get("/api/products", async (req, res) => {
  try {
    const products = await item.find();
    console.log(products);
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
