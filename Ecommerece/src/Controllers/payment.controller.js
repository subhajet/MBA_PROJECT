const BookingModel = require("../Models/booking.model")
const paymentModel = require ("../Models/payment.model");
const { bookingSuccess } = require("../scripts/email.scripts");
const { sendEmail } = require("../utils/NotificationUtils");
const { paymentStatus, bookingStatus } = require("../utils/constants");

exports.createPayment = async(req,res) => {
    const {bookingId, status , amount } = req.body

    const savedBooking = await BookingModel.findById(bookingId);

    try {
        const payment = await paymentModel.create(req.body)

        if(payment.status === paymentStatus.success){

            savedBooking.status = bookingStatus.completed;
            await savedBooking.save()

             // Send a confirmation email

            const {html, text, subject} = bookingSuccess(req.user, savedBooking);
            sendEmail([req.user.email],subject,html,text)
        }

        return res.status(200).send({message: "Payment Successfully"})
        
    }catch(err){

        return res.status(500).send({message:"Internal server error",message:err.message});
    }
}