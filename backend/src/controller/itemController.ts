import { Item } from "../models/itemModel";

export const additem = (req: any, res: any) => {
    const product = new Item({ ...req.body });
    product
        .save()
        .then((result: any) => {
            console.log("Item Created successfully", result);
        })
        .catch((err: any) => {
            console.log("Error creating item", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
};

export const updateitem = async (req: any, res: any) => {
    const { id } = req.params;
    const { name, description }: { name: string; description: string } = req.body;
    const payload = { name, description };
    try {
        await Item.findByIdAndUpdate(id, payload, { new: false });
    } catch (error) {
        console.error("Error updating item:", error);
    }
};

export const getItemCount = async (req: any, res: any) => {
    try {
        const itemCount = await Item.countDocuments();
        res.json({ itemCount });
    } catch (error) {
        console.error("Error in /count route:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
