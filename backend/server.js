const express=require('express')
const app=express()
const connectDB=require('./config/db')
const BlogRoutes=require('../backend/routes/BlogRoute')
const userRoute=require('../backend/routes/userRoute')

connectDB()
app.use(express.json())
app.use('/blog',BlogRoutes)
app.use('/User',userRoute)

const PORT=3000
app.listen(3000,()=>{
    console.log(`${PORT} server connected `);
})