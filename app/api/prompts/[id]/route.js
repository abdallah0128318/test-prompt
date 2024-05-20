import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

// An api endpoint function to fetch a specified document
export const GET = async (req, { params })=>{
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate('creator')
        return new Response(JSON.stringify(prompt), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify({"error": "Failed to fatch this prompt"}), {status: 500})
    }
}

// An api endpoint function to update a specified document

export const PATCH = async (req, { params })=>{
    const {prompt, tag} = await req.json()
    try {
        await connectToDB();
        const exisitinPrompt = await Prompt.findById(params.id)
        if(!exisitinPrompt)
        {
            return new Response(JSON.stringify({"error": "Failed to update this prompt"}), {status: 500})
        }
        exisitinPrompt.prompt = prompt
        exisitinPrompt.tag = tag
        await exisitinPrompt.save();
        return new Response(JSON.stringify({"message": "Prompt updated successfully"}), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify({"error": "Failed to fatch this prompt"}), {status: 500})
    }
}


// An api endpoint function to delete a specified document

export const DELETE = async (req, { params })=>{
    try {
        await connectToDB();
        await Prompt.findByIdAndDelete(params.id)
        return new Response(JSON.stringify({"message": "Prompt deleted Successfully"}), {status: 200})

    } catch (error) {
        return new Response(JSON.stringify({"error": "Failed to delete this prompt"}), {status: 500})
    }
}
