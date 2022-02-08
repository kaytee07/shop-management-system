const mongoose = require("mongoose");
const {Schema} = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    employeeType:{
        type:String,
        required:true
    },
    addToCart:[{
        type:Schema.Types.ObjectId,
        ref:'Product'
    }]
})

userSchema.plugin(passportLocalMongoose);


module.exports = mongoose.model("User", userSchema);