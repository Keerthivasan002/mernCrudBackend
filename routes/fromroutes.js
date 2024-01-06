import express from "express";
import { create, deleteUserinfo, getAll, getUserinfo, updateInfo } from "../controlls/usercontrol.js";



const fromRoutes = express.Router()

fromRoutes.post("/create", create)
fromRoutes.post("/getOne", getUserinfo)
fromRoutes.put("/update", updateInfo)
fromRoutes.delete("/delete",deleteUserinfo)
fromRoutes.get("/getAllUser", getAll)


export default fromRoutes


