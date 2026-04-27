const User = require('../models/userModel')  // Capitalized model name
const bcrypt = require('bcrypt')
const filter=10

const registerUser = async (req, res) => {  // Fixed function name casing
    const { name, email, password } = req.body 
     // Fixed destructuring
    
    try {
        // Fixed: Use { email } object and model name 'User'
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            return res.status(400).json({
                msg: 'User already exists'  
            })
        }

        // Fixed: Use salt rounds variable
        const hashedPassword = await bcrypt.hash(password, filter)
        
        // Fixed: Use model name 'User'
        const userData =await new User({
            name,
            email,
            password: hashedPassword  
        })
        
        await userData.save()
        res.status(201).json({
            msg: "User created successfully"
        })
    } catch (error) {
        console.error(error)  // Added logging for debugging
        res.status(500).json({ 
            msg: "Server error" 
        })
    }
}

module.exports = { registerUser }  // Added export
const Login=async(require)=>{
    const{email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({msg:"User not Register"})
        }
        const MatchPassword=await bcrypt.compare(password,user.password)
        if(!MatchPassword)
            return res.status(404).json({msg:"Invalid Credential"})
            res.status(200).json ({msg:"Login Successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Server Error"})
        
    }
}
module.exports={Login}