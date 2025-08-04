import Dotenv  from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

Dotenv.config({
path : "./env"
})



connectDB()

.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongodb conection failes !!!" , err);
})




// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        
//     } catch (error) {
//         console.error("ERROR:" , error)
//         throw err
//     }
// })()