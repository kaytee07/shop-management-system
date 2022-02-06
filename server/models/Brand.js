const mongoose = require("mongoose");
const {Schema} = mongoose;

const brandSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    products:[
        {
            type:Schema.Types.ObjectId,
            required:'Product'
        }
    ]
})

module.exports = mongoose.model("Brand",  brandSchema)