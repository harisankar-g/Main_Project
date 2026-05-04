const mongoose=require('mongoose')
require('dotenv').config()
const connectDB= async() =>{
try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Mongodb is Connected")
} catch (error) {
    console.log("Mongodb is not connected,error")
    
}
}
module.exports=connectDB;