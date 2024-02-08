const BookingModel = require("../Models/booking.model");


exports.createBooking = async (req,res) => {

    const {movieId, theaterId, timings, noOfSeats} = req.body;

    const bookingObj = {
        theaterId,
        movieId,
        userId:req.user._id,
        timings,
        noOfSeats,
        totalCost:noOfSeats * 800
    }
    try{

        const booking = await BookingModel.create(bookingObj)
        return res.status(201).send(booking)
        
    }catch(err){

        return res.status(500).send({message:"Interanl Server Error", error: err.message});
    }
    
}
exports.getAllBooking = async (req,res) => {
    try{
        
        const bookings = await BookingModel.find({}).populate("movieId theaterId userId");

        return res.status(200).send(bookings)
        
    }catch(err){

        return res.status(500).send({message:"Interanl Server Error 1",error: err.message });
    }
}

