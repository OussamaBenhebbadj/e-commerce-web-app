import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';
import ProductDetailsMen from './components/ProductDetailsMen';
import ProductDetailsWomen from './components/ProductDetailsWomen';
import ProductDetailsKids from './components/ProductDetailsKids';
import Register from './components/Register';
import Login from './components/Login';
import MyCart from './components/MyCart';
import { useState , useEffect } from 'react';
import { createContext } from 'react';

export const Context = createContext();


function App() {
  const [products , SetProducts] = useState([]);

  useEffect(() => {
    fetch("/api/produits")
    .then(res => res.json())
    .then(data => SetProducts(data.data))
    .catch(err => console.error("Erreur fetch produits :", err));
  }, []);

  return (
  <Context.Provider value={{products,SetProducts}}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/men/:id" element={<ProductDetailsMen />} />
        <Route path="/women/:id" element={<ProductDetailsWomen />} />
        <Route path="/kids/:id" element={<ProductDetailsKids />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Context.Provider>
  );
}

export default App;
