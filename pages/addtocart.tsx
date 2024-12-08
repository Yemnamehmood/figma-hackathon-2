'use client'
import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";


const addtocart =()=>{
    const initialItems = [
        { id: 1, name: "Graphic T-Shirt", price: 145, quantity: 1, image: "/Frame 33 (2).jpg" },
        { id: 2, name: "Checkered Shirt", price: 180, quantity: 1, image: "/Frame 34.jpg" },
        { id: 3, name: "Skinny Fit Jeans", price: 240, quantity: 1, image: "/Frame 33.jpg" },
      ];
    
      const [cartItems, setCartItems] = useState(initialItems);
    
      // Function to delete an item
      const handleDelete = (id: number) => {
        setCartItems(cartItems.filter(item => item.id !== id));
      };
    
      // Function to increase the quantity
      const increaseQuantity = (id: number) => {
        setCartItems(cartItems.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
      };
    
      // Function to decrease the quantity
      const decreaseQuantity = (id: number) => {
        setCartItems(cartItems.map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ));
      };

        // Handle the logic to decide whether to increase or decrease quantity
  const handleQuantityChange = (id: number, operation: 'increase' | 'decrease') => {
    if (operation === 'increase') {
      increaseQuantity(id);
    } else if (operation === 'decrease') {
      decreaseQuantity(id);
    }
  };
    
    return(

        <div>
        {/* Top Line */}
        <div className="bg-black text-white text-center text-sm py-2">
          Sign up and get 20% off your first order.{" "}
          <a href="#" className="underline">
            Sign up now
          </a>
        </div>
  
        {/* Header */}
        <header className="bg-white text-black py-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between px-4">
            {/* Logo */}
            <h1 className="text-2xl font-extrabold">SHOP.CO</h1>
  
            {/* Navigation */}
            <nav className="flex items-center space-x-6">
              <div className="relative">
                <a
                  href="#"
                  className="text-black flex items-center hover:underline"
                >
                  Shop
                  <span className="ml-1">▼</span>
                </a>
              </div>
              <a href="#" className="text-black hover:underline">
                On Sale
              </a>
              <a href="#" className="text-black hover:underline">
                New Arrivals
              </a>
              <a href="#" className="text-black hover:underline">
                Brands
              </a>
            </nav>
  
            {/* Search Bar */}
            <div className="flex items-center space-x-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="py-2 px-4 w-80 rounded-md border border-gray-300 text-black"
                />
                <span className="absolute right-3 text-gray-500 cursor-pointer">
                  🔍
                </span>
              </div>
  
              {/* User Icon */}
              <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
                👤
              </div>
  
              {/* Trolley Icon */}
              <div className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full cursor-pointer">
                🛒
              </div>
            </div>
          </div>
        
        </header>
              {/* Main Content */}
      <div className="container mx-auto flex mt-8 gap-8 px-4">
        {/* YOUR CART Section */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-extrabold text-black mb-6" style={{ fontFamily: "integral-cff" }}>
            YOUR CART
          </h2>
          {/* Render Cart Items */}
          {cartItems.map(item => (
    <div key={item.id} className="bg-white p-4 mb-4 rounded-md shadow-md flex items-center space-x-4">
      {/* Product Image */}
      <div className="relative w-24 h-24">
        <img
          src={item.image}
          alt={item.name}
          
          className="rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1">
        {/* Product Name */}
        <p className="text-lg font-bold">{item.name}</p>
        
        {/* Product Price */}
        <p className="text-gray-700 font-bold text-sm">Price: ${item.price}</p>
        
        {/* Quantity Controls */}
        <div className="flex items-center mt-2 space-x-2">
          {/* Single button for quantity increase/decrease */}
          <button
            onClick={() => handleQuantityChange(item.id, 'decrease')}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            -
          </button>
          <p className="mx-2 text-sm">{item.quantity}</p>
          <button
            onClick={() => handleQuantityChange(item.id, 'increase')}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Delete Button */}
      <div className="ml-2">
        <button
          onClick={() => handleDelete(item.id)}
          className="text-white bg-red-500 px-3 py-2 rounded hover:bg-red-600 transition"
        >
          🗑️
        </button>
      </div>
    </div>
  ))}
</div>





        {/* Right Container - Order Summary */}
<div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-black mb-4">Order Summary</h2>
  
  {/* Subtotal Section */}
  <div className="space-y-2 text-gray-700 text-sm">
    <div className="flex justify-between">
      <span>Subtotal:</span>
      <span>${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
    </div>

    {/* Discount Section */}
    <div className="flex justify-between text-red-600 font-semibold">
      <span>Discount (-20% off):</span>
      <span>-$113</span>
    </div>

    {/* Delivery Fee Section */}
    <div className="flex justify-between">
      <span>Delivery Fee:</span>
      <span>$15</span>
    </div>

    {/* Gray line separator */}
    <div className="border-t border-gray-300 my-2"></div>

    {/* Total Section */}
    <div className="flex justify-between font-semibold text-lg">
      <span>Total:</span>
      <span>${cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) - 113 + 15}</span>
    </div>
  </div>

  {/* Add Promo Code Section */}
  <div className="mt-4 bg-gray-100 p-2 rounded-md flex items-center justify-between">
    <span className="text-gray-600 text-sm">Add Promo Code</span>
    <button className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 transition">Apply</button>
  </div>

  {/* Go To Checkout Button */}
  <div className="mt-6">
    <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition flex items-center justify-center">
      <span>Go to Checkout</span>
      <span className="ml-2 transform rotate-90">→</span>
    </button>
  </div>
</div>

      </div>













        

                {/* Subscription Section */}
<section className="bg-black py-8 px-10 rounded-md ml-10 mr-10">
  {/* Wrapper for Heading and Form */}
  <div className="flex flex-col md:flex-row justify-between items-start">
    {/* Heading */}
    <h2 className="text-white text-5xl font-extrabold mb-4 leading-tight">
      STAY UPTO DATE ABOUT
      <br />
      OUR LATEST OFFERS
    </h2>

    {/* Subscription Form */}
    <div className="flex flex-col items-end gap-4 mt-6 md:mt-0">
      {/* Email Input */}
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-80 px-4 py-3 rounded-lg text-black focus:outline-none"
      />



      {/* Subscribe Button */}
      <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition w-80">
        Subscribe to Newsletter
      </button>
    </div>
  </div>
</section>
{/* Footer Section */}
<footer className="bg-gray-100 py-10 px-8 md:px-20">
  <div className="flex flex-wrap justify-between gap-8">
    {/* SHOP.CO Section */}
    <div>
      <h2 className="text-2xl font-extrabold  text-black mb-4">SHOP.CO</h2>
      <p className="text-gray-700 text-lg mb-6 leading-snug ">
        We have clothes that suit your style and
        <br/>
         which you are proud to wear. From
         <br/>
         women to men.
      </p>
      {/* Social Icons */}
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black">
          <i className="fab fa-github text-2xl"></i>
        </a>
      </div>
    </div>

    {/* Company Section */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Company</h3>
      <ul className="space-y-2  text-m text-gray-600">
        <li><a href="#" className="hover:text-black">About</a></li>
        <li><a href="#" className="hover:text-black">Features</a></li>
        <li><a href="#" className="hover:text-black">Works</a></li>
        <li><a href="#" className="hover:text-black">Career</a></li>
      </ul>
    </div>

    {/* Help Section */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Help</h3>
      <ul className="space-y-2 text-m text-gray-600">
        <li><a href="#" className="hover:text-black">Customer Support</a></li>
        <li><a href="#" className="hover:text-black">Delivery Details</a></li>
        <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
        <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
      </ul>
    </div>

    {/* FAQ Section */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">FAQ</h3>
      <ul className="space-y-2 text-m text-gray-600">
        <li><a href="#" className="hover:text-black">Account</a></li>
        <li><a href="#" className="hover:text-black">Manage Deliveries</a></li>
        <li><a href="#" className="hover:text-black">Orders</a></li>
        <li><a href="#" className="hover:text-black">Payments</a></li>
      </ul>
    </div>

    {/* Resources Section */}
    <div>
      <h3 className="text-lg font-semibold text-black mb-4">Resources</h3>
      <ul className="space-y-2 text-m text-gray-600">
        <li><a href="#" className="hover:text-black">Free Ebooks</a></li>
        <li><a href="#" className="hover:text-black">Development Tutorials</a></li>
        <li><a href="#" className="hover:text-black">How-to Blog</a></li>
        <li><a href="#" className="hover:text-black">YouTube Playlist</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="flex justify-between items-center mt-10 border-t border-gray-300 pt-6">
    {/* Left Text */}
    <p className="text-m text-gray-600">
      Shop.co © 2024. All rights reserved. Made by Yemna Mehmood.
    </p>

    {/* Payment Icons */}
    <div className="flex space-x-4">
      <i className="fab fa-cc-visa text-3xl text-gray-500"></i>
      <i className="fab fa-cc-paypal text-3xl text-gray-500"></i>
      <i className="fab fa-apple-pay text-3xl text-gray-500"></i>
      <i className="fab fa-google-pay text-3xl text-gray-500"></i>
    </div>
  </div>
  </footer>
  </div>
        



)
}
export default addtocart
