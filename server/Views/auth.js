const express = require("express");
const router = express.Router();
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("../models/user");
const catchAsync = require("../utils/asyncErrors");
const AppError = require("../utils/AppError");
const genPassword = require('../utils/passwordutils').genPassword;

router.route("/signup")
     .post(catchAsync(async(req,res)=>{
         const { name, employeeType, email, password, verifyPassword} = req.body;
        if(!name, !employeeType, !email, !password, !verifyPassword){
            throw new AppError("enter all fields", 422)
        }

        const  check = await User.find({email:email})
        if(check.email) throw new AppError("email already exist", 406);

        if(password !== verifyPassword) throw new AppError("passwords do not match", 404)
        const saltHash = genPassword(password);

        const salt = saltHash.salt;
        const hash = saltHash.hash;

        const user = new User({
            username:name,
            employeeType,
            email,
            salt,
            hash
        })

        user.save();
        console.log(user)
         res.json({name:newUser.name, email:newUser.email, employeeType:newUser.password})
     }))

router.route("/signin")
      .get((req, res)=>{
          res.render('/')
      })

router.route("/signin")
.post(passport.authenticate('local'),(req, res, next) => {
  console.log("welcome")
  res.json({message: "Welcome"})  
  res.render("/")
});

module.exports = router
