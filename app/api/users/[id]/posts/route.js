import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"
export const GET = async (req, { params })=>{
    try {
        await connectToDB()
        const userPosts = await Prompt.find({creator: params.id}).populate("creator")
        return new Response(JSON.stringify(userPosts), {status: 200})
        
    } catch (error) {
        return new Response(JSON.stringify({"error": "Failed to fetch prompts created by the user"}), {status: 500})
    }

}