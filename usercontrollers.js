const { findOne } = require('../Models/productmodel')
const user=require('../Models/usermodels')
const bcrypt=require('bcrypt')
const saltrounds=10

const registeruser=async(req,res)=>{
    const{
    firstname,
    lastname,
    email,
    password,
    conformpassword,
    address,
    gender,
    phoneno,
    }
    =req.body
    try {
        const user=await user.findOne(email)
        if(user){
            return res.status(400).json({msg:"user already exist"})
        }
        const hashpassword=await bcrypt.hash(password,conformpassword,10)
        const userdata=await new user({
             firstname,
             lastname,
             email,
             password:hashpassword,
             conformpassword:hashpassword,
             address,
             gender,
             phoneno
        })
        await userdata.save()
        res.status(201).json({
            msg:"User created Successfully"})
        }
     catch (error) {
        res.status(500).json({msg:"Server Error"})
    }
}
