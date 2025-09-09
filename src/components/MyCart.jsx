import React from 'react';
import CartItems from './CartItems';

function MyCart() {

  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <div className="text-center mt-10 text-red-500 font-bold">
        You must be logged in to see your cart.
      </div>
    );
  }

  return (
    <div>
      <CartItems />
    </div>
  );
}

export default MyCart;
