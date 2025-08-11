const express = require("express");
const app = express();
const productControllers = require("./../server/controllers/ProductControllers");
const userControllers = require('./controllers/UserControllers');
const authControllers = require('./controllers/authControllers');

app.use(express.json());

app.get('/api/produits', productControllers.getallProducts);
app.get('/api/produits/:id', productControllers.getOneProduct);
app.post('/api/produits' , productControllers.createProduct);
app.delete('/api/produits/:id' , productControllers.deleteProduct);
app.get('/api/users', userControllers.getAllusers);
app.post('/api/signup', authControllers.signup);
app.post('/api/login', authControllers.login);


module.exports = app ;