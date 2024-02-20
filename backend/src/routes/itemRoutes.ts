// routes/items.ts
import express from "express";
import { addItem, getItemCount, updateitem } from "../controller/itemController";

const router = express.Router();

router.post("/add", addItem);
router.patch("/update/:id", updateitem)
router.get("/count", getItemCount)

export default router;
