


const validateCreateThreaterRequest = (req,res,next) =>{

    if(!req.body.name){
        return res.status(400).send({message:"Faild! Theater name is not provided"});
    }

    next();

}

module.exports = {
    validateCreateThreaterRequest
}