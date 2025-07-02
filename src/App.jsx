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
import data from './data';
import { useState } from 'react';
import { createContext } from 'react';

export const Context = createContext();
const getDefaultCart = () =>
  {
    let cart = {};
    for (let index = 0; index < data.length+1; index++) {
      cart[index] = 0;
    }
    return cart;
  }

function App() {
  const [cartItems,SetcartItems] = useState(getDefaultCart());
  const [products , SetProducts] = useState([data]);
  const addToCart = (ItemId) =>
  {
    SetcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}));
    console.log(cartItems);
  }
  const removeFromCart = (ItemId) =>
    {
      SetcartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}));
    }
  return (
  <Context.Provider value={{products,SetProducts,data,cartItems,addToCart,removeFromCart}}>
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
        <Route path='/login/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </Context.Provider>
  );
}

export default App;
