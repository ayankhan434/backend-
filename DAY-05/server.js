 //server start karta hai
 //server.js ka kaam hiota hai server start karna aur usko configure karna.
 //database connect karna aur server ko listen karna.
 
 const app=require('./src/app.js')
 const mongoose=require('mongoose')

 

 const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://ayankhanayan992_db_user:DIC5ryLqKF9REJCF@cluster0.pezg2wx.mongodb.net/?appName=Cluster0"
    );
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
}

connectDb();

 app.listen(3000,()=>{
        console.log("server is running on port 3000")
 })
