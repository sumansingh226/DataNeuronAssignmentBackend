import { NextFunction, Request, Response } from "express";
import { ApiCounts } from "../models/apiCountModel";
import { Item } from "../models/itemModel";

/**
 * Add a new item and increment the addApiCount.
 * @param req - The request object containing the new item data in the request body.
 * @param res - The response object to send back the saved item.
 * @returns A JSON object containing the saved item.
 * @throws 500 - Internal Server Error if the item creation fails.
 */
export const addItem = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countUpdate = await ApiCounts.updateOne(
            {},
            { $inc: { addApiCount: 1 } },
            { upsert: true }
        );
        if (!countUpdate) {
            throw new Error("Failed to update count.");
        }
        const product = new Item({ ...req.body });
        const result = await product.save();
        res.json(result);
        return next();
    } catch (error) {
        console.log("Error creating item", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


/**
 * Update an item by ID and increment the updateApiCount.
 * @param req - The request object containing the item ID in the URL params and the updated item data in the request body.
 * @param res - The response object to send back the updated item.
 * @returns A JSON object containing the updated item.
 * @throws 500 - Internal Server Error if the update fails.
 */
export const updateitem = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, description }: { name: string; description: string } = req.body;
    const payload = { name, description };
    try {
        const countUpdate = await ApiCounts.updateOne(
            {},
            { $inc: { updateApiCount: 1 } },
            { upsert: true }
        );
        if (!countUpdate) {
            throw new Error("Failed to update count.");
        }
        const result: any = await Item.findByIdAndUpdate(id, payload, {
            new: false,
        });
        res.json(result);
        return next();
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


/**
 * Get the item count from the ApiCounts collection.
 * @param req - The request object (not used in this function).
 * @param res - The response object to send back the item count.
 * @returns A JSON object containing the item count.
 * @throws 500 - Internal Server Error if the count retrieval fails.
 */
export const getItemCount = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const [itemCount] = await ApiCounts.find();
        res.json(itemCount);
        next();
    } catch (error) {
        console.error("Error in /count route:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

/**
 * Fetches all items from the database.
 * @param req - Express request object.
 * @param res - Express response object.
 * @param next - Express next function.
 * @returns JSON response with the array of items or an error message.
 */
export const getItems = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const items = await Item.find().sort({ _id: -1 });
        res.json(items);
        next();
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
