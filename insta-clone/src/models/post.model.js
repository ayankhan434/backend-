const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    caption:{
        type:String,
        required:[true,"caption is required"]
    },
    imgURL:{
        type:String,
        required:[true,"image URL is required"]
    },
    user:{
        ref:"Users",
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"user id is required for creating a post "]

    }
})



const postModel=mongoose.model("Posts",postSchema);

module.exports=postModel;