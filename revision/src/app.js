const express=require('express');

const app =express();  //server instance create kar rha hai

/*
notes=[
{
tittle:"server.js",
description:"server ko start karne ke liye app.listen() method ka use kiya jata hai"
}
]
*/ 
// REST API knowledge 
app.use(express.json());
const notes =[]
//post methood ka use karke data ko server me bheja jata hai
//tittle and discription ko post karne ke liye api banai hai
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);

    res.status(201).json({
        message:"note is added successfully",
        
    })
})

// GET method ka use karke data ko server se get kiya jata hai
//GET methood

app.get('/notes',(req,res)=>{
    res.status(200).json({
   message:"notes are fetched successfully",

    notes:notes
    })
})


// delete method ka use karke data ko server se delete kiya jata hai

app.delete('/notes/:index',(req,res)=>{
    const index=req.params.index;

    delete notes[ index]

    res.status(200).json({
        message:"note is deleted successfully"
    })
})

//patch method ka use karke data ko server me update kiya jata hai

app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index
    const description=req.body.description

    notes[index].description=description

    res.status(200).json({
        message:"note is updated successfully"
    })
})










module.exports=app;  //app ko export kar rha hai