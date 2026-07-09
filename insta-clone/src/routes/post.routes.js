const express=require("express");
const postRouter=express.Router();


const postController=require("../controllers/post.controller.js");  

const multer=require("multer");
const upload=multer({storage:multer.memoryStorage()});  // Store files in memory    



postRouter.post("/",upload.single("image"),postController.createPostController);   


module.exports=postRouter;