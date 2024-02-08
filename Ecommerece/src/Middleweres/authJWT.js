
const jwt = require("jsonwebtoken");
const User = require("../Models/user.model");
const { userTypes } = require("../utils/constants");
const { SECRET } = require("../../configs/auth.config");

const verifyToken = async (req,res,next) =>{

    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({message:"No Token Provided"});
    }

    jwt.verify(token, SECRET, async function(err,payload){

        if(err){
            return res.status(401).send({message:err.message});
        }

        const userId = payload.userId;

        const user = await User.findOne({userId:userId});
        req.user=user;

        next();
    })
}


const verifyAdmin = (req,res,next) =>{

    if(req.user.userType !== userTypes.ADMIN){
        return res.status(403).send({message:"User is not  autherised to do this..!"});
    }
    next();


}

module.exports = {
    verifyToken,
    verifyAdmin
}