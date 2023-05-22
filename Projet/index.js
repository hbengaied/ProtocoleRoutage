import express from "express";
import router from './routes/index.js'
import path from 'path'
import dbConnect from "./database/connexion.js";
const app = express()


dbConnect()
app.use("/public",express.static(path.join(process.cwd(), "public")))
app.set("view engine", "ejs")
app.use(router)
app.listen(8081, () => console.log("Port 8081"))
