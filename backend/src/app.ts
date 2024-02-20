// app.ts
import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './dbConfig/db';
import itemsRouter from './routes/itemRoutes';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/items', itemsRouter);

const PORT = process.env.PORT || 50000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
