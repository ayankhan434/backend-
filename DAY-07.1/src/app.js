// server create karna 

const express=require("express");

const app=express();


const noteModel=require("./models/noted.model.js")
//middleware

app.use(express.json())


app.post("/notes",async (req,res)=>{
    const {title,description,age}=req.body

    const note=await noteModel.create({
        title,description,age
    })
    res.status(201).json(note);
})

module.exports=app;