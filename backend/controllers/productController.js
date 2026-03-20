const Product = require("../models/Product");

// add product
exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get products with filters
exports.getProducts = async (req, res) => {
  try {
    let { category, minPrice, maxPrice, sort } = req.query;

    let filter = {};

    if (category) {
      filter.category = category;
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    let query = Product.find(filter);

    if (sort === "asc") {
      query = query.sort({ price: 1 });
    } else if (sort === "desc") {
      query = query.sort({ price: -1 });
    }

    const products = await query;
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
