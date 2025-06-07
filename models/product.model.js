const mongoose = require("mongoose");

// PRODUCT SCREMA
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your product name"],
    },

    quantity: {
      type: Number,
      require: true,
      default: 0,
    },

    price: {
      type: Number,
      require: true,
      default: 0,
    },

    image: {
      type: String,
      require: false,
    },
  },
  { Timestamp: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
