

const mongoose = require('mongoose')
const { paymentStatus } = require('../utils/constants')

const paymentSchema = new mongoose.Schema ({
    bookingId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:"Booking_FS39"
    },
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:Object.values(paymentStatus),
        default:paymentStatus.pending
    },
})

const paymentModel = mongoose.model("payment_FS39",paymentSchema)

module.exports = paymentModel