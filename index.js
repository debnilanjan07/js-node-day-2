const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("hello how are you")
})
app.get("/api/main",(req,res)=>{
    res.write("<h1> Hello world</h1>")
    res.write(`Express:- it is a high weight web application framework to help organize your web application into MVC
    architecture on their server side</p> `)
    res.end()
})
app.listen(4300);