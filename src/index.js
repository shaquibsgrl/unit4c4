const express=require("express");

const app=express();

app.use(express.json());

const {register,login}=require("./controller/authcontroller")


const userController=require("./controller/usercontroller");

const todoController=require("./controller/todocontroller")

app.use("/user",userController);

app.use("/todo",todoController)

app.post("/register",register);

app.post("/login",login)


module.exports=app;