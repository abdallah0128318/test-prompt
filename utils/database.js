import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    try {
        if(isConnected){
            console.log("database is connected");
            return;
        }
        await mongoose.connect(process.env.MONGODB_URI, {dbName: "promptopia", useNewUrlParser: true })
        isConnected = true;
        console.log("DB is connected");
    } catch (error) {
       console.log(error); 
    }
}

