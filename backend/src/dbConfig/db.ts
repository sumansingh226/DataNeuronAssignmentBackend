import mongoose from 'mongoose';
require("dotenv").config();

export const connectDb = async () => {
    const dbURI: string = process.env.CONNECTION_URL ?? "";
    try {
        const client: any = await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as any);

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};



