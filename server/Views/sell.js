const express = require("express");
const router = express.Router();
const app = express();
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/Product");
const Brand = require("../models/Brand");
const catchAsync = require("../utils/asyncErrors");
const AppError = require("../utils/AppError");
const user = require("../models/user");

router.route("/cart").post(
  catchAsync(async (req, res) => {
    const { name, brand, price, _id , salesName} = req.body;
    const prod = await Product.findById(_id) 
    const salesPerson = await User.findOne({name:salesName})   
    if(salesPerson.addToCart.includes(_id)){
       throw new AppError("item in cart Already", 422)
    }
    salesPerson.addToCart.push(_id)
    salesPerson.save()
    res.json({message:"item added"})
  })
);

router.route("/cartItems")
      .post(catchAsync(async(req, res)=>{
        console.log()
        const user = await User.findOne({
          name: req.session.passport.user,
        }).populate("addToCart", "name brand price _id");
        res.json(user.addToCart)
      }))

module.exports = router;
