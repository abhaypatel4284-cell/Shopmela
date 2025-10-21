import React, { useState } from "react";

export default function App() {
  const products = [
    { id: 1, name: "Trendy T-Shirt", description: "Comfortable cotton t-shirt", price: 499, image: "./assets/product1.jpg" },
    { id: 2, name: "Casual Shoes", description: "Stylish casual shoes", price: 899, image: "./assets/product2.jpg" },
    { id: 3, name: "Stylish Watch", description: "Elegant wrist watch", price: 699, image: "./assets/product3.jpg" }
  ];

  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart([...cart, product]);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">ShopMela</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="font-semibold text-gray-800 text-lg">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-pink-600 font-bold text-lg mb-2">₹{product.price}</p>
            <button onClick={() => addToCart(product)} className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700">Add to Cart</button>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="max-w-4xl mx-auto mt-10 p-4 bg-white rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-semibold text-lg text-right">Total: ₹{totalPrice}</p>
          <button className="mt-3 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 float-right">Checkout</button>
        </div>
      )}

      <footer className="text-center py-6 text-gray-500 text-sm bg-white border-t mt-10">© 2025 ShopMela — All Rights Reserved</footer>
    </div>
  );
}
