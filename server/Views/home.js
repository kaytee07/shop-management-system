const express = require("express");
const router = express.Router();
const app = express();
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/Product");
const Brand = require("../models/Brand");
const catchAsync = require("../utils/asyncErrors");
const AppError = require("../utils/AppError");

router.route("/home")
      .get(catchAsync(async(req, res)=>{
           const { email, passport, employeeType } = req.session;
           res.json({ name: passport.user, email, employeeType });
      }))

router.route("/nav").get(
  catchAsync(async (req, res) => {
    const employeeType = req.signedCookies.info;
    res.json({employeeType:employeeType})
  })
)

router.route("/brand").get(
  catchAsync(async(req, res)=>{
    const brands = await Brand.find();
    res.json(brands)
  })
)

router.route("/createproduct").post(
  catchAsync(async (req, res) => {
     const {name, brand, quantity, price} = req.body;

     const product =  new Product({
       name,
       brand,
       price,
       quantity
     })
    
     product.save()

     
   if(await Brand.findOne({name:brand})){
       const findBrand = await Brand.findOneAndUpdate(
         { name: brand },
         {
           $push: { products: product },
         },
         { new: true }
       );
        console.log(findBrand, product);
   }else{
         const newBrand = new Brand({
           name: brand
         });

         newBrand.save()
         
          const findBrand = await Brand.findOneAndUpdate(
            { name: brand },
            {
              $push: { products: product },
            },
            { new: true }
          )
           console.log(findBrand, product);
   }
    
    

  })
);



router.route("/logout").get(
  catchAsync(async (req, res) => {
   req.logout();
  })
);

module.exports = router