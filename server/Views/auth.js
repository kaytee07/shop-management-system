const express = require("express");
const router = express.Router();
const app = express();
const User = require("../models/user");

router.route("/signup")
     .post(async(req,res)=>{
         const { name, employeeType, email, password } = req.body;
        const user = new User({
            name,
            employeeType,
            email,
            password
        })

        user.save()
     console.log(user)
     })

router.route("/signin").post((req, res) => {
  console.log("DAMN MAN");
});

module.exports = router
