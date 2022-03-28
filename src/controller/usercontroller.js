const express=require("express");
const User=require("../model/usermodel");

const router=express.Router();

router.get("",async(req,res)=>{
    try {

        const users=await User.find().lean().exec();
        return res.status(200).send(users)
        
    } catch (err) {
        return res.status(404).send({message:err.message})
        
    }
});
router.post("",async(req,res)=>{
    try {

        const users=await User.create(req.body);
        return res.status(200).send(users)
        
    } catch (err) {
        return res.status(404).send({message:err.message})
        
    }
});



module.exports=router