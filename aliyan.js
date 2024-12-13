const express=require("express");
const app=express();
const port=8000;

app.get("/" , (req, res)=>{
    res.send("<h1>welcome to the Express.js</h1>");
})
app.get("/about", (req,res)=>{
    res.send("<h2>Exprss.js is a lightwight web application framrwork for  Node.js</h2>");
})
app.get("/save" , (req ,res)=>{
    res.send("<h2>it is fast robust and asynchronous in nature</h2>");
})
app.get("/contact" , (req, res)=>{
    res.send("<h3>hello world contact us 6589742365</h3>")
})

app.listen(port , ()=>{
    console.log(`server run on ${port}`)
})
