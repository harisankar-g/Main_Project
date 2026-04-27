const Login=async(req,res)=>{
    const{email,password}=req.body
    try {
        const user=await user.findOne({email})
        if(!user)
        {
            return res.status(404).json({msg:"User not registered please register"})
        }
        constMatchPassword=await bcrypt.compare(password,user.password)
    
        if(!MatchPassword){
            return res.status(404).json
            ({msg:"Invalid Credentials"})
        }
        res.status(200).json({msg:"Login Successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Server Error"})
        
    }
}
module.exports=Login