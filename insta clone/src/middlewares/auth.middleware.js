const jwt=require("jsonwebtoken")

async function identifyUser(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message :"token not provided, Unauthorised accesss"
        })
    }

    let decoded=null;

    try{
        decoded=jwt.verify(token,process.env.JWT_SECRET)
    } catch (err){
        return res.status(401).json({
            message:"user not authorised"
        })
    }

    req.user=decoded

    next()

}


const followModel=mongoose.model("follows",followSchema)
module.exports=identifyUser