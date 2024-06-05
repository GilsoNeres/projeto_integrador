const ProductService = require('../services/productService');

class ProductController {
  async createProduct(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(404).json({ error: 'Product not found' });
    }
  }

  async getAllProducts(req, res) {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await ProductService.updateProduct(req.params.id, req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new ProductController();
