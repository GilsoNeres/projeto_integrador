const OrderService = require('../services/orderService');

class OrderController {
  async createOrder(req, res) {
    try {
      const order = await OrderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getOrderById(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      res.status(200).json(order);
    } catch (err) {
      res.status(404).json({ error: 'Order not found' });
    }
  }

  async getAllOrders(req, res) {
    try {
      const orders = await OrderService.getAllOrders();
      res.status(200).json(orders);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateOrder(req, res) {
    try {
      const order = await OrderService.updateOrder(req.params.id, req.body);
      res.status(200).json(order);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteOrder(req, res) {
    try {
      await OrderService.deleteOrder(req.params.id);
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new OrderController();
