import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import fromRoutes from "./routes/fromroutes.js";
import cors from "cors";

dotenv.config()

const app= express()
app.use(cors({ origin: "*" }));

app.use (express.json())

app.use("/", fromRoutes)

mongoose.connect(process.env.URL).then(console.log("mongoose_conncted")).catch("err")


app.listen(7000,()=>{
    console.log("node connected");
})



