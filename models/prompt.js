import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
    creator: {
        ref: "User",
        type: Schema.Types.ObjectId
    },
    prompt: {
        type: String,
        required: [true, "prompt body is required"],
    },
    tag: {
        type: String,
        required: [true, "One or more are required"],
    }
}, {timestamps: true});

const Prompt = models.Prompt || model("Prompt", promptSchema);

export default Prompt;