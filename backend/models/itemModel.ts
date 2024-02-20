import mongoose, { Schema } from "mongoose";

interface Item {
    name: string;
    description: string;
}

const UserSchema: Schema<Item> = new Schema<Item>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const User = mongoose.model<Item>("Item", UserSchema);

export default User;
