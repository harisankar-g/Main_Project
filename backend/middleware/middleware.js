const jwt =require('jsonwebtoken');



const AuthMiddleware=async(req,res,next)=>{
    const header=req.header('Authorization');
    if(!header){
        res.status (400).json({msg:'no token'})
    }
    try{
        const token=header.split(' ')[1];
        const decodeToken=jwt.verify(token,process.env.SECRET_KEY);
        req.user=decodeToken;
        next()
    }catch(error){
        return res.status(401).json({msg:'Invalid token'});
    }
};

module.exports=AuthMiddleware;