const Product = require("./../models/ProductModel");


exports.getallProducts = async (req,res) => {
    try {
        let query = Product.find();
        if(req.query){
            query = query.find(req.query);
        };
        if (req.query.sort){
            const sortBy = req.query.sort.split(',').join(' ');
            query = query.sort(sortBy);
        };
        const products = await query;
        res.status(200).json({
            status : "success",
            length: products.length,
            data : products
        })
    } catch(err){
        res.status(404).json({
            status : "fail",
            message: err  
        })
    }
    
};

exports.getOneProduct = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(201).json({
            status : "success",
            data : product
        });
    } catch(err){
        res.status(404).json({
            status : "fail",
            message: err  
        })
    }
};

exports.createProduct = async (req,res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({
            status : "success",
            data : newProduct
        });
    } catch(err){
        res.status(404).json({
            status : "fail",
            message: err  
        })
    }
};

exports.deleteProduct = async (req,res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status : "success"
        });
    } catch(err){
        res.status(404).json({
            status : "fail",
            message: err  
        })
    }
};
