const express = require("express");
const app = express();
const Product = require("./../server/models/ProductModel");


app.use(express.json());

app.get('/produits' , async (req,res)=>{
    const products = await Product.find();
    res.status(201).json({
        status : "success",
        length: products.length,
        data : products
    })
});


module.exports = app ;