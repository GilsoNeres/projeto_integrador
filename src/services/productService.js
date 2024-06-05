const { prisma } = require('../config/db');

class ProductService {
  async createProduct(data) {
    return await prisma.product.create({ data });
  }

  async getProductById(id) {
    return await prisma.product.findUnique({ where: { id: parseInt(id) } });
  }

  async getAllProducts() {
    return await prisma.product.findMany();
  }

  async updateProduct(id, data) {
    return await prisma.product.update({ where: { id: parseInt(id) }, data });
  }

  async deleteProduct(id) {
    return await prisma.product.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = new ProductService();
