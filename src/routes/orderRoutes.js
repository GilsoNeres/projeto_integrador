const express = require('express');
const OrderController = require('../controllers/orderController');

const router = express.Router();

router.post('/', OrderController.createOrder);
router.get('/:id', OrderController.getOrderById);
router.get('/', OrderController.getAllOrders);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id', OrderController.deleteOrder);

module.exports = router;
