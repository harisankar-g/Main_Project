const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    conformpassword:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true
    }

},{
    timestamps:true
});
const user=mongoose.model('user',userschema);
module.exports=user;