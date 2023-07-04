import mongoose from "mongoose";
import config from "./Config";

//create a connection to mongoDB
const connect = async (): Promise<void> => {
    try {
        const db = await mongoose.connect(config.connectionString);
        console.log("connected to mongoDB");
    } catch (err: any) {
        console.log("Error in connection:\n", err);
    }
}