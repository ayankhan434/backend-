// app.js ka kaam hiota hai server create karna aur usko configure karna. 
const express=require('express')


const app=express()


app.use(express.json())
//
const notes=[]
// post methood
app.post('/notes',(req,res)=>{
    console.log(req.body) 
    notes.push(req.body)

    res.status(201).send("note added successfully")

})


// get method
app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes:notes
    })
})

// delete method
app.delete('/notes/:id',(req,res)=>{
    delete notes[req.params.id]
    res.status(200).json({
        message:"note deleted successfully",
        notes:notes
    })
})



module.exports=app