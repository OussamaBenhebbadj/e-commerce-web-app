const mongoose = require("mongoose");

const MyCartSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", 
    required: true,
  },
  products: [
    {
      productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", 
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});


const MyCart = mongoose.model("MyCart", MyCartSchema);

module.exports = MyCart;
