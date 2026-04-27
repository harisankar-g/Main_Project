const mongoose=require('mongoose')
const Blogschema=new mongoose.Schema (

    {
        title:{
    type:String,
    required:true

},
description:{
    type:String,
    required:true
},

    author:{
        type:String,
        required:true
    }

    }
    ,{
        timestamps:true})

        const Blog=mongoose.model('blog',Blogschema)
        module.exports=Blog
    