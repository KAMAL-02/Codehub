import mongoose from "mongoose";

export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB");
    } catch (error) {
        console.log("error connecting to DB:", error.message)
    }
}