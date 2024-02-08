const { createBooking, getAllBooking } = require("../Controllers/booking.controller");
const { verifyToken } = require("../Middleweres/authJWT")



module.exports = function(app){
    app.post("/mba/api/v1/bookings",[verifyToken], createBooking);
    app.get("/mba/api/v1/bookings",[verifyToken], getAllBooking);
}

