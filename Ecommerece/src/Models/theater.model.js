
const mongoose = require('mongoose');
const theaterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    pinCode:{
        type:String,
        required:true
    },
    movies:{
        type:[mongoose.SchemaTypes.Array.ObjectId],
        ref:'Movie_FS39'
    },
})

module.exports = mongoose.model("Theater_FS39", theaterSchema);