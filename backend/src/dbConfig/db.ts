import mongoose from "mongoose";
require("dotenv").config();

/**
 * Connects to the MongoDB database using the provided connection URL.
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 */

export const connectDb = async (): Promise<void> => {
    // Retrieve the database connection URL from the environment variables
    const dbURI: string = process.env.CONNECTION_URL || "";
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

