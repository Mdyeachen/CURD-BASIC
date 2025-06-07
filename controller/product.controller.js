const Product = require("../models/product.model");

// GET PRODUCTS CONTROLLER
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET PRODUCT CONTROLLER
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST PRODUCT CONTROLLER
const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log({ message: error.message });
    res.status(500).json({ message: error.message });
  }
};

// UPDATE PRODUCT CONTROLLER
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productUpdateDetials = req.body;
    const upProduct = await Product.findByIdAndUpdate(id, productUpdateDetials);
    if (!upProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updateProduct = await Product.findById(id);
    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE PRODUCT CONTROLLER
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json({ message: "Product Deleted Sucessfully" });
};

module.exports = {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
};
