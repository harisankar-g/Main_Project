const mongoose=require("mongoose")
const productschema=new mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    product_name:{
        type:String,
        required:true
    },
    product_brand:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    product_quantity:{
        type:String,
        required:true
},
product_color:{
        type:String,
        required:true
}},
{
    timestamps:true
})
const product=mongoose.model('product',productschema)
module.exports=product
