const express=require("express");

const Todo=require("../model/todomodel");

const router=express.Router();

router.get("",async(req,res)=>{
    try {

        const users=await Todo.find().lean().exec();
        return res.status(200).send(users)
        
    } catch (err) {
        return res.status(401).send({message:err.message})
        
    }
});
router.post("",async(req,res)=>{
    try {

        const users=await Todo.create(req.body);
        return res.status(200).send(users)
        
    } catch (err) {
        return res.status(401).send({message:err.message})
        
    }
});
router.get("/:id",async(req,res)=>{
    try {

        const users=await User.findbById(req.params.id);
        return res.status(200).send(users)
        
    } catch (err) {
        return res.status(401).send({message:err.message})
        
    }
});
router.patch("/:id",async(req,res)=>{
    try {

        const users=await User.findbByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(users)
        
    } catch (err) {
        return res.status(401).send({message:err.message})
        
    }
});
router.delete("/:id",async(req,res)=>{
    try {

        const users=await User.findbByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        return res.status(200).send(users)
        
    } catch (err) {
        return res.status(401).send({message:err.message})
        
    }
});


module.exports=router