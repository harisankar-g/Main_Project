const product=require ('../Models/')
const createproduct=async (req,res)=>{
    const{
        product_id,
        product_name,
        product_brand,
        product_price,
        product_quantity,
        product_size,
        product_color
    }=req,res
    try {
        const newdata=await new product({
        product_id,
        product_name,
        product_brand,
        product_price,
        product_quantity,
        product_size,
        product_color
        })
        await newdata.save()
        res.status(200).json({msg:"Product created successfully",data:newdata})
    } catch (error) {
        res.status(500).json({msg:"Server error"})
        
    }
}
module.exports={createproduct}