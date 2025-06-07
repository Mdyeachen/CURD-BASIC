const express = require("express");
const { default: mongoose } = require("mongoose");
const dotEnv = require("dotenv");
const productRoute = require("./routes/product.route");

// Load environment variables
dotEnv.config();

// Initialize app
const app = express();

// Environment variables
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// MIDDLEWARE
app.use(express.json());

// DEFAULT ROUTE
app.get("/", (req, res) => {
  res.send("Server is on ");
});

app.use("/api/product", productRoute);

// mongodb cnnection
mongoose
  .connect(`${MONGO_URI}`)
  .then(() => {
    console.log("Connected!");
    // LISTING
    app.listen(PORT, () => {
      console.log(`Port is running on ${PORT}`);
    });
  })
  .catch(() => console.log("Connection Failed"));
