import { Schema, Document, model } from "mongoose";

export interface IItem extends Document {
    name: string;
    description: string;
}

const ItemSchema: Schema<IItem> = new Schema<IItem>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

export const Item = model<IItem>("Item", ItemSchema);
