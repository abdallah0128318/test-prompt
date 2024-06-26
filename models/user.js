import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "This email is used before"]
    },
    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    image: {
        type: String
    }
    
}, {timestamps: true});

const User = models.User || model("User", userSchema);

export default User;