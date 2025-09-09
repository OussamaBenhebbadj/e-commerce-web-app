const express = require("express");
const app = express();
const cors = require("cors");
const productControllers = require("./../server/controllers/ProductControllers");
const userControllers = require('./controllers/UserControllers');
const authControllers = require('./controllers/authControllers');
const MyCartControllers = require("./controllers/MyCartControllers");

app.use(express.json());
app.use(cors());

//products endpoints
app.get('/api/produits', productControllers.getallProducts);
app.get('/api/produits/:id', productControllers.getOneProduct);
app.post('/api/produits' , productControllers.createProduct);
app.delete('/api/produits/:id' , productControllers.deleteProduct);

//users endpoints
app.get('/api/users', userControllers.getAllusers);

//authentification endpoints
app.post('/api/signup', authControllers.signup);
app.post('/api/login', authControllers.login);

//MyCart endpoints
app.get('/api/mycart', authControllers.protect , MyCartControllers.getMyCart);
app.put('/api/mycart', authControllers.protect , MyCartControllers.AddToMyCart);


module.exports = app ;