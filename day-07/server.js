 //server start karta hai
 //server.js ka kaam hiota hai server start karna aur usko configure karna.
 //database connect karna aur server ko listen karna.
 require("dns").setDefaultResultOrder("ipv4first");


 const mongoose=require('mongoose')
 const app=require('./src/app.js')
 
 const connectToDatabase=require("./src/app.js")


 
 
 
 function connectTODatabase(){
    mongoose.connect("mongodb://ayan:Ayankhan1234@ac-dxdtrao-shard-00-00.60e6nfh.mongodb.net:27017,ac-dxdtrao-shard-00-01.60e6nfh.mongodb.net:27017,ac-dxdtrao-shard-00-02.60e6nfh.mongodb.net:27017/?ssl=true&replicaSet=atlas-o7by7k-shard-0&authSource=admin&appName=Cluster0/day-05")
        .then(() => console.log("Connected to DB"))
        .catch(err => console.error(err))

}

connectTODatabase()

 





 app.listen(3001,()=>{
        console.log("server is running on port 3000")
 })