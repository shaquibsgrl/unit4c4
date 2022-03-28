const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://shaquib:12345@cluster0.i0acw.mongodb.net/eval4");
}

module.exports=connect;