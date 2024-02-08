const mongoose = require("mongoose");
const { bookingStatus } = require("../utils/constants");

const bookingSchema = new mongoose.Schema({
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user_FS39',
        required:true
    },
    movieId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Movie_FS39',
        required:true
    },
    theaterId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Theater_FS39',
        required:true
    },
    timings:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:Object.values(bookingStatus),
        default:bookingStatus.inProgress
    },
    totalCost:{
        type:Number
    },
    noOfSeats:{
        type:Number
    }
})

const BookingModel = mongoose.model("Bookings_FS39",bookingSchema);

module.exports = BookingModel
