import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () =>{
    try {
     const conectioninstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
     console.log(`/n mongoose db connected !! DB  host : ${conectioninstance.connection.host} `);
     
    } catch (error) {
        console.log("mongoose db connection errro:" , error);
        process.exit(1);
    }
}


export default connectDB