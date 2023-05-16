import express from "express";
import router from './routes/index.js'
const app = express()

app.set("view engine", "ejs")
app.use(router)
app.listen(8081, () => console.log("Port 8081"))
