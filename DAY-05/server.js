 //server start karta hai
 //server.js ka kaam hiota hai server start karna aur usko configure karna.
 //database connect karna aur server ko listen karna.
 require("dns").setDefaultResultOrder("ipv4first");


 const mongoose=require('mongoose')
 const app=require('./src/app.js')
 

 function connectTODatabase(){
    mongoose.connect(
  "mongodb+srv://ayan:Ayankhan1234@cluster0.60e6nfh.mongodb.net/day-05?retryWrites=true&w=majority&appName=Cluster0"
)
.then(() => console.log("Connected to DB"))
.catch(err => console.error(err))

}

 



connectTODatabase()

 app.listen(3000,()=>{
        console.log("server is running on port 3000")
 })
