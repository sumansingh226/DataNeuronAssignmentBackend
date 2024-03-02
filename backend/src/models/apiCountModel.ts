import { Schema, Document, model } from "mongoose";

export interface ApiCount extends Document {
    addApiCount: number;
    updateApiCount: number;
}

const ApiCountSchema: Schema<ApiCount> = new Schema<ApiCount>(
    {
        addApiCount: {
            type: Number,
            default: 0,
        },
        updateApiCount: {
            type: Number,
            default: 0,
        },
    },
    { versionKey: false }
);

export const ApiCounts = model<ApiCount>("ApiCounts", ApiCountSchema);
