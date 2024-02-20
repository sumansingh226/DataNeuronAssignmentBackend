import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./dbConfig/db";
import itemsRouter from "./routes/itemRoutes";

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());


// Home route
app.get("/", (req, res) => {
    res.send("Welcome! to express....");
});

app.get("/item", (req, res) => {
    res.send("Welcome! to express....");
});
// Mount the itemsRouter at the '/items' path
app.use("/items", itemsRouter);


// Define the port to listen on, defaulting to 50000 if not specified in the environment
const PORT = process.env.PORT || 5000;

// Connect to the database and start the server
const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {
            console.log(`Server running on port http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
    }
};

// Start the server
startServer();

// Handle uncaught exceptions and unhandled rejections
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
    process.exit(1);
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection:", err);
    process.exit(1);
});
