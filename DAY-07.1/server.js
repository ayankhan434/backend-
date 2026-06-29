require("dotenv").config();

//require("dotenv").config();

console.log(process.env);
console.log(process.env.MONGO_URI);

const app=require("./src/app.js")

const mongoose=require("mongoose")


const connectToDatabase=require("./src/config/database.js")


app.listen(3000,()=>{
    console.log("server is running on 3000")
})