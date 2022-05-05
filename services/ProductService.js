const { Products } = require("../models");

async function getProducts() {
  const allProducts = await Products.findAll();
  return allProducts;
}

async function createProduct(body) {
    const { name, coins, description, image } = body;
    const allProducts = await Products.create({
        name, coins, description, image
    });
    return allProducts;
  }

module.exports = {
  getProducts,
  createProduct,
};
