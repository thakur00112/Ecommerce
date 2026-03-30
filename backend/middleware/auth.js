const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Check if user is authenticated
exports.isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies || (req.headers.authorization && req.headers.authorization.startsWith('Bearer') && { token: req.headers.authorization.split(' ')[1] }) || {};

  if (!token) {
    return res.status(401).json({ message: 'Login first to access this resource' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// Handling user roles
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Role (${req.user.role}) is not allowed to access this resource`
      });
    }
    next();
  };
};
