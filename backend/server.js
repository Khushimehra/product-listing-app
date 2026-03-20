require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/products", productRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
