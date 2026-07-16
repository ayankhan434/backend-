const postModel=require("../models/post.model.js");
const ImageKit=require("@imagekit/nodejs");     
const { toFile }=require("@imagekit/nodejs")
const jwt=require("jsonwebtoken");

const imageKit=new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,

})

async function createPostController(req,res){
    console.log(req.body,req.file);
    const token= req.cookies.token;
    if(!token){
        return res.status(401).send({
            message:"unauthorized"
        });
    }
    let decoded;
    
    try{
        decoded=  jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        req.user=decoded;
    }catch(err){
        return res.status(401).send({message:"unauthorized"});
    }
   
    console.log(decoded);

    const file=await imageKit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer),'file'),
        fileName:"test",
        folder:"insta-posts"
       
    })
    //res.send(file);

    const post=await postModel.create({
        caption:req.body.caption,
        
        image:file.url,
        user:decoded.id
    })
    res.status(201).send({
        message:"post created successfully",
        post
    });

}


async function getPostController(req,res){

    const token = req.cookies.token

    let decoded;
    try {

    decoded=jwt.verify(token,process.env.JWT_SECRET)
    }
    catch (err){
        return res.status(401).json
        message:"token invalid"
    }
    const userId=decoded.id

    const posts=await postModel.find({
        user:userId
    })

    res.status(200).json({
        message:"post fetched succesfully",
        posts
    })
}


async function getPostDetailsController(req,res){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unauthorised Access"
        })
    }

    let decoded;

    try{
        decoded=jwt.verify(token,process.env.JWT_SECRET)
    } catch (err){
        return res.status(401).json({
            message:"Invalid Token"
        })
    }

    const userId= decoded.id
    const postId=req.params.postId
    const post = await postModel.findById(postId)


    if (post){
        return res.status(404).json({
            message:"post not found."
        })
    }

    const isValidUser=post.user.tostring()===userId

    if(!isValidUser){
        return res.status(403).json({
            message:"forbidden content"
        })
    }

    return res.status(200).json({
        message:"post fetched successsfully"
    })
    
}
module.exports={
    createPostController,
    getPostController,
    getPostDetailsController
};