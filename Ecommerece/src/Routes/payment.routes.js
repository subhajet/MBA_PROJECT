const { createPayment } = require("../Controllers/payment.controller")
const {verifyToken} = require("../Middleweres/authJWT")


module.exports = (app) => {
    app.post("/mba/api/v1/payments",[verifyToken], createPayment)
}

