

const express= require("express");
const app=express();
app.get("/" , (req, res)=>{
    res.send("<h1>this is my first class of Epress. js</h1>");
})
app.get("/about" , (req, res)=>{
    res.send("<h1>this is my About Page</h1>");
})
app.get("/photo" , (req, res)=>{
    res.send("<h1>this is my Photo Page</h1>");
})
app.get("/garlly" , (req, res)=>{
    res.send("<h1>this is my Garlly Page</h1>")
})
app.listen(8080 , ()=>{
    console.log("server run on 8080")
})