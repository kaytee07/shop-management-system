const express = require("express");
const router = express.Router();
const app = express();
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/Product");
const Brand = require("../models/Brand");
const catchAsync = require("../utils/asyncErrors");
const AppError = require("../utils/AppError");

router.route("/:name").get(
  catchAsync(async (req, res) => {
    const {name} = req.params
    const products = await Product.find({brand:name})
    res.json(products);
  })
);

module.exports = router;