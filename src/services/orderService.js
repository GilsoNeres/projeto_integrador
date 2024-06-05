const { prisma } = require('../config/db');

class OrderService {
  async createOrder(data) {
    return await prisma.order.create({ data });
  }

  async getOrderById(id) {
    return await prisma.order.findUnique({ where: { id: parseInt(id) }, include: { user: true, product: true } });
  }

  async getAllOrders() {
    return await prisma.order.findMany({ include: { user: true, product: true } });
  }

  async updateOrder(id, data) {
    return await prisma.order.update({ where: { id: parseInt(id) }, data });
  }

  async deleteOrder(id) {
    return await prisma.order.delete({ where: { id: parseInt(id) } });
  }
}

module.exports = new OrderService();
