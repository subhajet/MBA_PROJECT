
const mongoose = require("mongoose");

const productSchema =  mongoose.Schema({
    name:{
        type:String,
        requried:true
    },
    description:{
        type:String,
        requried:true
    },
    category:{
        type:String,
        requried:true,
        enum:["Electronics","Automobile","Technology","Fashion"]
    },
    price:{
        type:Number,
        requried:true
    }
})

const Product = mongoose.model("Product FullStack", productSchema);  

module.exports = Product;