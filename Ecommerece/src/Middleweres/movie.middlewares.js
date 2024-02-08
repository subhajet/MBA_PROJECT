

const validateCreateMovieRequest = (req,res,next) =>{

    if(!req.body.name){
        return res.staus(400).send({message:"Faild Moive name is not provided"});
    }
    if(!req.body.releaseStatus){
        return res.staus(400).send({message:"releaseStatus is not provided"});
    }
    next();

}

module.exports ={
    validateCreateMovieRequest
}