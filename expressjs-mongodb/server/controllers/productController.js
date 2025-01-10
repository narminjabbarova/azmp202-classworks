const productModel = require("../models/productModel")

const getAllProducts = async(req,res)=>{
    const products = await productModel.find()
    res.send(products)
}


const deleteProduct = async(req,res)=>{
    const {id} = req.params;
    
    try {
        const deletedProductById = await blogProduct.findByIdAndDelete(id)
        if(deletedProduct){
            res.status(200).send({message:'product deleted successfully', deletedProduct})
        } else{
            res.status(400).send({message:'product not found'})
        }
    } catch (error) {
        res.status(500).send({ message: 'Error deleting the product', error });  
    }
}

const postProduct = async(req,res)=>{
    try {
        const newProduct = productModel({...req.body})
        await newProduct.save()
        res.status(201).json({
            message: "product added successfully",
            product: newProduct
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const putProduct = async(req, res)=>{
    const id = req.params.id
    
        const updatedProduct = await productModel.findByIdAndUpdate(
            id,
            {
                ...req.body,
            },
            {
                new: true,
            }
        )
        res.json(updatedProduct)   
}

module.exports = {
    getAllProducts,
    deleteProduct, 
    postProduct,
    putProduct
}