const { SECRET } = require("../../configs/auth.config");
const User = require("../Models/user.model");
const {userStatus, userTypes } = require("../utils/constants");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


exports.signup = async (req,res)=>{
    const {name,email,userId, password, userType} = req.body;
    const status = (userType === userTypes.CUSTOMER) ? userStatus.APPROVED : userStatus.PENDING;

    const hasedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User ({
        name,
        email,
        userId,
        password:hasedPassword,
        userType,
        userStatus:status
    })
    try{
        const user = await newUser.save();
        res.status(201).send(user);
    }catch(Err){
        res.status(500).send({message:"Something went wrong"});
    }

}

exports.signIn = async (req,res) =>{
    const {userId, password} = req.body; 

    const user = await User.findOne({userId:userId});

    if(!user){
        return res.status(400).send({message:"UserID passed is invalid "})
    }

    const isPasswordvalid = bcrypt.compareSync(password,user.password);

    if(!isPasswordvalid){
        return res.status(400).send({message:"Password passed is invalid"});    
    }

    var token = jwt.sign({userId:userId},SECRET,{expiresIn:'1h'})
    // console.log(SECRET);
    
    

    return res.status(200).send({
        name:user.name,
        userId:user.userId,
        email:user.email,
        userType:user.userType,
        accessToken:token
    })
}
