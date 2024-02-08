const { createMovie, getAllMovies, getMovieById } = require("../Controllers/movie.controllers")
const { verifyToken, verifyAdmin } = require("../Middleweres/authJWT")
const { validateCreateMovieRequest } = require("../Middleweres/movie.middlewares")


module.exports = function(app){
    app.post("/mba/api/v1/movies",[verifyToken, verifyAdmin, validateCreateMovieRequest], createMovie)
    app.get("/mba/api/v1/movies",[], getAllMovies)
    app.get("/mba/api/v1/movies/:id",[verifyToken], getMovieById)
}