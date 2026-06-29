require("dotenv").config();

const mongoose=require("mongoose");
 console.log(process.env.MONGO_URI)
 function connectTODatabase(){
    console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI)
    //mongodb://ayan:Ayankhan1234@ac-dxdtrao-shard-00-00.60e6nfh.mongodb.net:27017,ac-dxdtrao-shard-00-01.60e6nfh.mongodb.net:27017,ac-dxdtrao-shard-00-02.60e6nfh.mongodb.net:27017/?ssl=true&replicaSet=atlas-o7by7k-shard-0&authSource=admin&appName=Cluster0/day-05
    //mongodb+srv://ayan:Ayankhan1234@cluster0.60e6nfh.mongodb.net/
        .then(() => console.log("Connected to DB"))
        .catch(err => console.error(err))

        //mongodb+srv://ayan:Ayankhan1234@cluster0.60e6nfh.mongodb.net/

}

connectTODatabase();

module.exports=connectTODatabase;