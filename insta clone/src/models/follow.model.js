const { Timestamp } = require("mongodb")
const mongoose=require("mongoose")

const followSchema= new mongoose.schema({
    follower:{
        type:mongoose.Schema.type.objectId,
        ref:"users",
        required:[true, "follower is required"]
    },
    followee:{
        type:mongoose.Schema.Types.objectId,
        ref:"users",
        required:[true,"followee is required"]
    }
},{
        Timestamps:true
    
})

const followModel=mongoose.model("follows",followSchema)

model.exports=followModel