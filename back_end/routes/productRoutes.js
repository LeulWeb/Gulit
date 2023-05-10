import express from "express";

import Product from "../model/productModel.js";
 
import asyncHandler from "express-async-handler";

const router = express.Router()


//@desc Fetch all products
//@route GET/api/products
//@access Public
router.get('/', asyncHandler ( async (req, res)=>{
    const products = await Product.find({})
    res.json(products)
}))


//@desc Fetch single products
//@route GET/api/products/id
//@access Public
router.get('/:id', asyncHandler(async (req,res)=>{
    const  product = await Product.findById(req.params.id)
    
    if(product){
        res.json(product)
    }else{
        res.status(404).json({message: "Product not found"})
    }
}))


//To check the products 
//got to localhost:5000/api/products
//got to localhost:5000/api/products/id 

//Download POST man
 
export  default  router