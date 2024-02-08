
const theaterModel = require("../Models/theater.model")
const Movie = require("../Models/movie.model");

exports.createTheaters = async (req,res) => {
  try {

    const theater = await theaterModel.create(req.body);

    return res.status(201).send(theater)
  }catch(err){

    return res.status(500).send({message:err.message})

  }
}

exports.getAllTheaters = async (req,res) => {

  try {

    const theaters = await theaterModel.find({});

    return res.status(201).send(theaters )
  }catch(err){

    return res.status(500).send({message:err.message})

  }
    
}
exports.getTheaterById = async (req,res) => {

  const id = req.params.id;

  try {

    const theater = await theaterModel.findById(id).populate("movies");

    return res.status(201).send(theater )
  }catch(err){

    return res.status(500).send({message:err.message})

  }
    
    
}
exports.addMovieToTheater = async (req,res) => {
  
  const {theaterId, movieId} = req.params;

  const [SavedTheater,saveMovie] = await Promise.all([theaterModel.findById(theaterId), Movie.findById(movieId)]);

  if(!SavedTheater){
    return res.status(400).send({message:"Theater doesn't exists"});
  }

  if(!saveMovie){

    return res.status(400).send({message:"Theater doesn't exists"});
  }

  SavedTheater.movies.push(movieId);
  await SavedTheater.save();

  return res.status(200).send({message:"Movie Added Successfully"});

}
exports.checkIfMovieRunningInGivenTheater = async (req,res) => {

  const {theaterId, movieId} = req.params;

  const [SavedTheater,saveMovie] = await Promise.all([theaterModel.findById(theaterId), Movie.findById(movieId)]);

  if(!SavedTheater){
    return res.status(400).send({message:"Theater doesn't exists"});
  }

  if(!saveMovie){

    return res.status(400).send({message:"Theater doesn't exists"});
  }
  const response = {
    isRunning : SavedTheater.movies.includes(movieId)
  }

  res.status(200).send(response);
    
}


// path = ('^' + path + (strict ? '' : path[path.length - 1] === '/' ? '?' : '/?'))
