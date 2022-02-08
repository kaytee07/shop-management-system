const express = require("express");
const app = express();
const session = require('express-session');
const MongoStore = require("connect-mongo");
const cookieParser = require('cookie-parser')
require("dotenv").config();
const cors = require("cors");
const mongoose = require('mongoose');
const flash = require("flash");
const passport = require('passport');
const validPassword = require('./utils/passwordutils').validPassword; 
const LocalStrategy = require('passport-local');
const User = require("./models/user");
const authRoutes = require('./Views/auth');
const mainRoutes = require('./Views/home');
const productRoutes = require("./Views/product")
const sellRoutes = require('./Views/sell')
const AppError = require("./utils/AppError");


const PORT = 2000;

mongoose.connect(process.env.DB_URL);




const db = mongoose.connection;
db.on("error", console.error.bind("mongo error"))
db.once("open", ()=>{
    console.log("DATABASE CONNECTED")
})

const sessionStore = MongoStore.create({mongoUrl: process.env.DB_URL})

app.use(express.urlencoded());
app.use(cookieParser("the-man"))
app.use(session({
    secret:process.env.EXPRESS_SECRET,
    resave:false,
    saveUninitialized:true,
    store:sessionStore,
    cookie:{
        maxAge:1000 * 60 * 60 * 24
    }
}))
app.use(flash());
app.use(cors())

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},async function(username, password, done){
    const userCheck = await User.findOne({email:username},"username email hash salt")
    if(!userCheck){
         done(null, false);
        throw new AppError("Invalid username and password",401)    
    }
    
    const isValid = validPassword(password, userCheck.hash, userCheck.salt);

    if(isValid){
        return done(null, userCheck)
    }else{
        return done(null, false)
    }

}));
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser());

app.use("/auth", authRoutes);
app.use("/product", productRoutes);
app.use("/sell", sellRoutes);
app.use("/", mainRoutes);





app.use((err, req, res, next)=>{
    const {message ="Not found", status=404} = err;
    console.log(message, status)
    res.json({error:{
        message,
        status
    }})
    next()
})

app.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
})