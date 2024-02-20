// routes/items.ts
import express from "express";
import { ObjectId } from "mongodb";
const getDb: any = {};

const router = express.Router();
const db: any = {};
router.post("/add", async (req, res) => {
    try {
        const { name, description } = req.body;
        const result = await db
            .collection("items")
            .insertOne({ name, description });
    } catch (error: any) {
        console.log("err", error);
    }
});

router.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        const result = (await db
            .collection("items")
            .findOneAndUpdate(
                { _id: new ObjectId(id) },
                { $set: { name, description } }
            )) as any;
        return res.json(result.value);
    } catch (error: any) {
        console.log("err", error);
    }
});

router.get("/count", async (req: any, res: any) => {
    try {
        const addCount = await db
            .collection("items")
            .countDocuments({ name: "add" });
        const updateCount = await db
            .collection("items")
            .countDocuments({ name: "update" });
        res.json({ addCount, updateCount });
    } catch (error: any) {
        console.log("err", error);
    }
});

export default router;
