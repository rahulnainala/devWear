const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: String,
  comment: String,
  rating: Number,
});

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: Number,
  inStock: Boolean,
  image: String,
  desc: String,
  sizes: [Number],
  colors: [String],
  rating: Number,
  reviews: [reviewSchema],
});

// explicitly link to 'shoppingMarket' collection
module.exports = mongoose.model("Item", itemSchema, "shoppingMarket");
