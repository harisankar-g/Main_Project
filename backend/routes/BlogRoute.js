const express=require('express')
const Router=express.Router()
const BlogController=require('../controllers/BlogControllers')

Router.post('/createblog',BlogController.createBlog)
Router.get('/allpost',BlogController.getBlog)
Router.put('/updatepost/:id',BlogController.updatepost)
Router.delete('/deletepost/:id',BlogController.deleteBlog)
module.exports=Router