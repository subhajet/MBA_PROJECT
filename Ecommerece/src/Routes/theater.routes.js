const { createTheaters, getAllTheaters, getTheaterById, addMovieToTheater, checkIfMovieRunningInGivenTheater } = require("../Controllers/theater.controllers")
const { verifyToken, verifyAdmin } = require("../Middleweres/authJWT")
const { validateCreateThreaterRequest } = require("../Middleweres/theater.middlerwares")


module.exports = function(app){
    app.post("/mba/api/v1/theaters",[verifyToken , verifyAdmin, validateCreateThreaterRequest], createTheaters)
    app.get("/mba/api/v1/theaters",[], getAllTheaters)
    app.get("/mba/api/v1/theaters/:id",[], getTheaterById)
    app.put("/mba/api/v1/theaters/:theaterId/movies/:movieId",[verifyToken,verifyAdmin],addMovieToTheater)
    app.get("/mba/api/v1/theaters/:theaterId/movies/:movieId",checkIfMovieRunningInGivenTheater)
}