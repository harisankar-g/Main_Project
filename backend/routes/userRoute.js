const express=require('express')
const router=express.Router()
const UserControllers=require('../controllers/userControllers')
router.post('/usercreate',UserControllers.registerUser)
router.post('/login',UserControllers.Login)
//router.post('/userLogin',UserControllers.Login)
module.exports=router