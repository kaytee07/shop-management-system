const express = require("express");
const router = express.Router();
const app = express();
const passport = require("passport");
const User = require("../models/user");
const Product = require("../models/Product");
const Brand = require("../models/Brand");
const catchAsync = require("../utils/asyncErrors");
const AppError = require("../utils/AppError");

router.route("/").get(
  catchAsync(async (req, res) => {
    const { name, brand, price } = req.body;
   console.log(name, brand, price)
  })
);

module.exports = router;
