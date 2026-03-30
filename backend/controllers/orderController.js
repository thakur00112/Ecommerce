const Order = require('../models/Order');
const Product = require('../models/Product');

// Create new order
exports.newOrder = async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    user: req.user._id
  });

  // Update stock
  for (let i = 0; i < orderItems.length; i++) {
    const product = await Product.findById(orderItems[i].product);
    product.stock -= orderItems[i].quantity;
    await product.save({ validateBeforeSave: false });
  }

  res.status(201).json({
    success: true,
    order
  });
};

// Get single order
exports.getSingleOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  res.status(200).json({ success: true, order });
};

// Get all orders (Admin)
exports.getAllOrders = async (req, res, next) => {
  const orders = await Order.find();
  const totalAmount = orders.reduce((total, order) => total + order.totalPrice, 0);

  res.status(200).json({
    success: true,
    totalAmount,
    orders
  });
};

// Update order status (Admin)
exports.updateOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  if (order.orderStatus === 'Delivered') {
    return res.status(400).json({ message: 'You have already delivered this order' });
  }

  order.orderStatus = req.body.status;
  if (req.body.status === 'Delivered') {
    order.deliveredAt = Date.now();
  }

  await order.save();

  res.status(200).json({
    success: true,
    order
  });
};

// Delete order (Admin)
exports.deleteOrder = async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  await order.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Order deleted successfully'
  });
};
