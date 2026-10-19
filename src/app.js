const express = require("express");

const app=express();


app.use("/hello",(req,res)=>{
    res.send("hello hello hello");
});

app.use("/login",(req,res)=>{
    res.send("This is login page");
});

app.use("/profile",(req,res)=>{
    res.send("This is profile page");
});


app.listen(3000,()=>{
    console.log("server is listening to port 3000");
});

