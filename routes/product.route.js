const express = require("express");
const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product.controller");

const router = express.Router();

// GET PRODUCTS ROUTE
router.get("/", getProducts);

// GET PRODUCT ROUTE
router.get("/:id", getProduct);

// POST ROUTE
router.post("/", postProduct);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;
