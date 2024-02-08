const Movie = require("../Models/movie.model");

exports.createMovie = async (req,res) =>{
    try {
        const movie = await Movie.create(req.body);
        return res.status(201).send(movie);

    }catch(err){
         return res.status(500).send({message:err.message})
    }
}

exports.getAllMovies = async (req,res) =>{
    try {
        const movies = await Movie.find({});
        return res.status(201).send(movies);

    }catch(err){
         return res.status(500).send({message:err.message})
    }
}

exports.getMovieById = async (req,res) =>{
    
    const id = req.params.id;
    try {
        const movie = await Movie.findById(id);

        if(!movie){
            return res.status(400).send({message:"Movie not found"});
        }

        return res.status(201).send(movie);

    }catch(err){
         return res.status(500).send({message:err.message})
    }
   
}

