const express=require('express')
const app=express()
const mongoDB=require('./config/db')
const port=3000
mongoDB()


app.listen(port,()=>{
    console.log('server is running');
    
})