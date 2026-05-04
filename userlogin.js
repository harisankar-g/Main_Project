const Login=async(req,res)=>{
    const{
        email,password}=req.body
    }
    try {
        const user=await user.findOne({email})
        if(!user){
            return res.status(404).json({
                msg:"User not registered,Please register"})
            
        }
            const Matchpassword=await bcrypt.compare(password,user.password)
            if(!Matchpassword){
                return res.status(404).json({msg:"Invalid credentials"})
            }
            res.status(200).json({msg:"LoggedIn Successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Server error"})
    }
    module.exports={Login}