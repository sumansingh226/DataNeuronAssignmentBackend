// app.ts
import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './dbConfig/db';
import itemsRouter from './routes/itemRoutes';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the itemsRouter at the '/items' path
app.use('/items', itemsRouter);

// Define the port to listen on, defaulting to 50000 if not specified in the environment
const PORT = process.env.PORT || 50000;

// Connect to the database and start the server
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port http://localhost:${PORT}`);
    });
});


/**
 * Handle uncaught exceptions and unhandled rejections in a Node.js application.
 * When an uncaught exception or unhandled rejection occurs, log the error and exit the process.
 */

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

// Handle unhandled rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1);
});


