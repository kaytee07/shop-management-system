const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require('mongoose');
const authRoutes = require('./Views/auth');


const PORT = 2000;

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind("mongo error"))
db.once("open", ()=>{
    console.log("DATABASE CONNECTED")
})

app.use(express.urlencoded())


app.use("/auth", authRoutes);



app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})