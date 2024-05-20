import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    try {
        if(isConnected){
            console.log("database is connected");
            return;
        }
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI, {dbName: "promptopia"})
        isConnected = true;
        console.log("DB is connected");
    } catch (error) {
       console.log(error); 
    }
}
