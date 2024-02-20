// routes/items.ts
import express from "express";
import { additem, getItemCount, updateitem } from "../controller/itemController";

const router = express.Router();

router.post("/add", additem);
router.put("/update/:id", updateitem)
router.get("/count", getItemCount)

export default router;
