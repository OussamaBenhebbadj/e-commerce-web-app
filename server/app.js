const express = require("express");
const app = express();
const productControllers = require("./../server/controllers/ProductControllers")

app.use(express.json());

app.get('/api/produits', productControllers.getallProducts);
app.get('/api/produits/:id', productControllers.getOneProduct);
app.post('/api/produits' , productControllers.createProduct);
app.delete('/api/produits/:id' , productControllers.deleteProduct);


module.exports = app ;