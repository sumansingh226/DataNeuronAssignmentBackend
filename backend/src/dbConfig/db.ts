import mongoose from "mongoose";
require("dotenv").config();

/**
 * Connects to the MongoDB database using the provided connection URL.
 * @returns {Promise<void>} A promise that resolves when the connection is successful.
 */
export const connectDb = async (): Promise<void> => {
    // Retrieve the database connection URL from the environment variables
    const dbURI: string = "mongodb+srv://summichauhan1234:summichauhan1234@cluster0.b29dk.mongodb.net/DataNeuron?retryWrites=true&w=majority";
    try {
        // Connect to the MongoDB database
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any);
        // Log a message indicating a successful connection
        console.log("Connected to MongoDB");
    } catch (error) {
        // Log an error message if the connection fails
        console.error("Error connecting to MongoDB:", error);
    }
};

