const express = require('express');
require('express-async-errors');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const dotenv = require('dotenv');
const connectDatabase = require('./config/db');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');

// Handle Uncaught exceptions
process.on('uncaughtException', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down due to uncaught exception');
    process.exit(1);
});

// Setting up config file
dotenv.config();

// Connecting to database
connectDatabase();

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(compression());

// Import all routes
const auth = require('./routes/authRoutes');
const products = require('./routes/productRoutes');
const order = require('./routes/orderRoutes');

app.use('/api/v1', auth);
app.use('/api/v1', products);
app.use('/api/v1', order);

// Middleware to handle errors
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});

// Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1);
    });
});
