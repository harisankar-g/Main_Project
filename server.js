const express=require('express')
const app=express()
 const connectDB=require('./Config/db')
const userroute=require('../Routes/userroute')
connectDB()
// app.use('/api/auth', require('./routes/userroute'))
 app.use('/api/user', require('../Routes/userroute'))
const PORT=3000

app.listen(PORT,()=>
{
    console.log('Server is Connected/running')
})
