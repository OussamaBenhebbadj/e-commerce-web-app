const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
        name : {
            type: String,
            required : true
        },
        description : {
            type: String,
            required: true
        },
        categorie : {
            type: String,
            required: true ,
            enum: {
                values: ['Men', 'Women', 'Kids'],
                message: 'Categorie is either: Men, Women, Kids'
            }
        },
        img: String,
        oldPrice: Number,
        newPrice: Number
}
); 

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product ;


