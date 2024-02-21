import express from "express";
import { addItem, getItemCount, updateitem, getItems } from "../controller/itemController";
import { startTimeMiddleware, endTimeMiddleware } from "../utils/apiExecTime";

const router = express.Router();

router.post("/add", startTimeMiddleware, addItem, endTimeMiddleware);
router.patch("/update/:id", startTimeMiddleware, updateitem, endTimeMiddleware);
router.get("/count", startTimeMiddleware, getItemCount, endTimeMiddleware);
router.get("/items", startTimeMiddleware, getItems, endTimeMiddleware);

export default router;
