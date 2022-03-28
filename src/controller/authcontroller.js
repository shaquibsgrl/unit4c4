const User=require("../model/usermodel");

const jwt=require("jsonwebtoken");
require("dotenv").config()

const newToken=(user)=>{
    return jwt.sign({user},process.env.secret_key)
}

const register=async(req,res)=>{
    try {
        let user=await User.findOne({email:req.body.email});

        //checking email
        if(user){
            return res.status(200).send("Email already exist")
        }
        user=await User.create(req.body);

        const token =newToken (user);
        return res.status(200).send({user,token})
    } catch (err) {
        res.status(400).send({message:err.message})
        
    }
}

const login=async(req,res)=>{
    try {
        const user=await User.findOne({email:req.body.email});

        //checked email
        if(!user){
            return res.status(404).send("Email or password is wrong")
        }
        //if email exist check for password
        const match=user.checkpassword(req.body.password);

        //if it doesn't match
        if(!match){
            return res.status(400).send({meassage:"wrong email or pasword"})
        }

        //if mactches

        const token =newToken(user);
        return res.status(200).send({user,token})
    } catch (err) {
        res.status(400).send({message:err.message})
        
    }
}

module.exports={register,login}