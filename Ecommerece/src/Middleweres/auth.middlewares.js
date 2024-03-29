const User = require("../Models/user.model");

const verifySignUpRequest = async(req,res,next)=>{
    const {name,email,userId, password, userType} = req.body;

    if(!name){
        return res.status(400).send({message:"name is not provided"})
    }
    if(!email){
        return res.status(400).send({message:"email is not provided"})
    }
    if(!password){
        return res.status(400).send({message:"password is not provided"})
    }
    if(!userId){
        return res.status(400).send({message:"userId is not provided"})
    }
    if(!userType){
        return res.status(400).send({message:"userType is not provided"})
    }


    const users = await User.find({
        $or:[
            {userId:userId},
            {email:email}
        ]
    });

    if(users && users.length){   
        return res.status(400).send({message:"userId or Email already exits"}); 
    }

    next();

}

const verifySignInRequest = (req,res,next) =>{
    const {userId, password} = req.body;

    if(!userId){
        return res.status(400).send({message:"Failed! userId is not provided"})
    }
    if(!password){
        return res.status(400).send({message:"Failed! password is not provided"})
    }
    next();


}



module.exports = {
    verifySignUpRequest,
    verifySignInRequest
}