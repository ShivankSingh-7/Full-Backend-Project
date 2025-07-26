// require('dotenv').config({path: '/.env'})
import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Serever is running at port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO_DB CONNECTION FAILED !!! ",err)
})


/*
import express from "express"

const app = express()
(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("App is not able to communicate with database")
            throw err
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on pert ${process.env.PORT}`);
        })
    } catch(error){
        console.log(error)
        throw err
    }
})()

*/