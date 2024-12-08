'use client';
import React from "react";
//import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
//import ProductDetail from "./productdetail";
import { useRouter } from 'next/router';
//import category from "./categoryproduct";
import { useState } from "react";
//import addtocart from "./addtocart";






const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const router = useRouter();

  const handleProductClick = () => {
    router.push('/productdetail');
  };
  const handleCategoryClick = () => {
    router.push('/categoryproduct'); // Adjust route if necessary
  };


  return (
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
    <button
      onClick={() => setShowDropdown((prev) => !prev)} // Toggle the dropdown state
      className="text-black flex items-center hover:underline"
    >
      Shop
      <span className="ml-1">▼</span>
    </button>
    {/* Use the state variable `showDropdown` to conditionally render the dropdown */}
    {showDropdown && (
      <ul className="absolute top-10 left-0 bg-white border border-gray-300 shadow-md rounded-md w-48 z-10">
        <li
          className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
          onClick={handleCategoryClick}
        >
          Category
        </li>
        {/* Add more dropdown options here if needed */}
      </ul>
    )}
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

      {/* Hero Section */}
      <main className="py-20 px-10 bg-[#F2F0F1]">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Content */}
          <div className="max-w-lg mb-4 md:mb-0 md:w-1/2">
            {/* Main Heading */}
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              FIND CLOTHES
              <br />
              THAT MATCHES
              <br />
              YOUR STYLE
            </h1>

            {/* Subtext */}
            <p className="text-gray-700 text-lg mb-6 leading-snug">
              Browse through our diverse range of meticulously crafted garments, designed
              to bring out your individuality and cater to your sense of style.
            </p>

            {/* Shop Now Button */}
            <button   onClick={handleProductClick}

             className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img
              src="/Rectangle 2 (1).jpg"
              alt="fashion image"
              className=""
            />
          </div>
        </div>
      </main>
            {/* Brands Section with Written Names & Font Styling */}
            <div className="bg-black py-4">
        <div className="container mx-auto flex items-center justify-around text-white space-x-6 md:space-x-10 text-lg font-semibold">
          {/* Versace */}
          <span className="text-[20px]" style={{ fontFamily: "'Times New Roman', serif" }}>Versace</span>
          {/* Zara */}
          <span className="text-[20px]" style={{ fontFamily: "Arial, sans-serif" }}>Zara</span>
          {/* Gucci */}
          <span className="text-[20px]" style={{ fontFamily: "'Georgia', serif" }}>Gucci</span>
          {/* Prada */}
          <span className="text-[20px]" style={{ fontFamily: "'Courier New', monospace" }}>Prada</span>
          {/* Calvin Klein */}
          <span className="text-[20px]" style={{ fontFamily: "Helvetica, sans-serif" }}>Calvin Klein</span>
        </div>
      </div>
                        {/* New Arrivals Section */}
                        <section className="py-12 px-10 bg-white relative">
        <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        
        {/* Grid Container for Items */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start"
        >
          {/* T-Shirt with Tape Details */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 32.jpg"
              alt="T-shirt with tape details"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">T-Shirt with Tape Details</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$120</p>
          </div>

          {/* Skinny Fit Jeans */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 33.jpg"
              alt="Skinny fit jeans"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Skinny Fit Jeans</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐ 4.5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2 text-red-500">
              <span className="line-through">$260</span> -20% Off
            </p>
          </div>

          {/* Checkered Shirt */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 34.jpg"
              alt="Checkered shirt"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Checkered Shirt</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$150</p>
          </div>

          {/* Sleeve Stripped T-Shirt */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 38 (2).jpg"
              alt="Sleeve stripped t-shirt"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Sleeve Stripped T-Shirt</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐ 4/5</span>
            </div>
            <p className="text-lg font-semibold mb-2 text-red-500">
              <span className="line-through">$160</span> -30% Off
            </p>
          </div>
        </div>

        {/* View All Section */}
        <div className="text-center mt-8">
          <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">View All</button>
        </div>
      </section>


            {/* TOP SELLING */}
            <section className="py-12 px-10 bg-white relative">
        <h2 className="text-3xl font-bold text-center mb-8"> TOP SELLING</h2>
        
        {/* Grid Container for Items */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start"
        >
          {/* Vertical Stripped Shirt */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 32 (1).jpg"
              alt="T-shirt with tape details"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
             <p className="text-lg font-semibold mb-2"> Vertical Stripped Shirt</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">
              <span className="text-black">$212</span>{" "}
              <span className="line-through text-red-500">$232</span>{" "}
              <span className="text-red-500">-30% Off</span>
            </p>
          </div>

          {/* Courage Graphic T-Shirt */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 33 (1).jpg"
              alt="Skinny fit jeans"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Courage Graphic T-Shirt</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐ 4.5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$145</p>
          </div>

          {/* Loose Fit Bermuda Shorts */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 34 (2).jpg"
              alt="Checkered shirt"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Loose Fit Bermuda Shorts</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$80</p>
          </div>

          {/* Faded Skinny Jeans */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 38 (3).jpg"
              alt="Sleeve stripped t-shirt"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Faded Skinny Jeans </p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐ 4/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$210</p>
          </div>
        </div>

        {/* View All Section */}
        <div className="text-center mt-8">
          <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">View All</button>
        </div>
      </section>

            {/* Browse by Dress Style Section */}
            <section className="py-12 px-10 bg-white relative">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">BROWSE BY DRESS STYLE</h2>

        {/* Grid Container for Collage-style 4 images */}
        <div
          className="relative grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center"
          style={{
            width: "900px",
            height: "600px",
            borderRadius: "30px",
            backgroundColor: "#e0e0e0", // Gray background
            margin: "0 auto", // Center align the entire div
          }}
        >
          {/* Casual */}
          <div className="relative bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <img
              src="/Frame 61.jpg"
              alt="Casual"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Formal */}
          <div className="relative bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <img
              src="/Frame 62 (1).jpg"
              alt="Formal"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Party */}
          <div className="relative bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <img
              src="/Frame 64.jpg"
              alt="Party"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gym */}
          <div className="relative bg-gray-100 shadow-md rounded-lg overflow-hidden">
            <img
              src="/Frame 63.jpg"
              alt="Gym"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      {/* Our Happy Customers Section */}
<section className="py-12 px-10 bg-white">
  {/* Updated Heading */}
  <h2 className="text-3xl font-bold text-left mb-8">OUR HAPPY CUSTOMERS</h2>

  {/* Testimonial Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Testimonial 1 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src="/Frame 62.jpg"
        alt="Customer 1"
        className="w-full h-auto rounded-lg mb-4"
      />
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src="/Frame 61 (1).jpg"
        alt="Customer 2"
        className="w-full h-auto rounded-lg mb-4"
      />
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <img
        src="/Frame 22.jpg"
        alt="Customer 3"
        className="w-full h-auto rounded-lg mb-4"
      />
    </div>
  </div>
</section>
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
  );
};

export default Home;


