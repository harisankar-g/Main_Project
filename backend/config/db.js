
const mongoose=require("mongoose")
require("dotenv").config()

const mongoDB=async()=>{


    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('mongo connection is successful');

    }
    catch(error){
        console.log('mongo connection is failed',error)
        
        
        
    }
}
module.exports=mongoDB