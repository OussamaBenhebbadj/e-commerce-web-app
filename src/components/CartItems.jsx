// CartItems.js
import React, { useEffect, useState } from 'react';
import '../App.css';

function CartItems() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/mycart", {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (data.status === "success") {
          setCart(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error("Erreur lors du fetch du panier :", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [token]);

  if (loading) {
    return <p className="text-center py-10">Loading your cart...</p>;
  }

  if (!cart || cart.products.length === 0) {
    return <p className="text-center py-10 text-gray-500">Your cart is empty 🛒</p>;
  }

  // Calcul du prix total
  const totalPrice = cart.products.reduce(
    (acc, item) => acc + item.productID.newPrice * item.quantity,
    0
  );

  return (
    <div className="mx-24 my-24">
      <hr className="h-0.5 bg-green-500 border-0 my-2" />

      {cart.products.map((item) => (
        <div
          key={item._id}
          className="grid grid-cols-5 gap-4 items-center py-4 border-b"
        >
          <img
            src={item.productID.img}
            alt={item.productID.name}
            className="h-20 w-20 object-cover"
          />
          <p className="font-medium">{item.productID.name}</p>
          <p className="text-center">{item.quantity}</p>
          <p className="text-green-600 font-semibold">
            ${(item.productID.newPrice * item.quantity).toFixed(2)}
          </p>
          <button
            className="text-red-500 font-bold hover:underline"
            onClick={() => console.log("Remove", item._id)}
          >
            X
          </button>
        </div>
      ))}

      <div className="text-right font-bold text-2xl mt-6">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default CartItems;
