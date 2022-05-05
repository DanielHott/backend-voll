const ProductService = require('../services/ProductService');

async function getProducts(_req, res) {
    try {
      const products = await ProductService.getProducts();
      return res.status(200).json(products);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
};

async function createProducts(req, res) {
    try {
      const products = await ProductService.createProduct(req.body);
      return res.status(200).json(products);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
};

module.exports = {
    getProducts, 
    createProducts,
};