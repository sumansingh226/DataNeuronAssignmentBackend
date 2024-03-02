import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./dbConfig/db";
import itemsRouter from "./routes/itemRoutes";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors({
    origin: "https://joyful-pixie-e695d6.netlify.app"
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome! to express....");
});
app.use("/items", itemsRouter);

const PORT = process.env.PORT || 5000;

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
