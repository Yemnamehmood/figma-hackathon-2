'use client'
import React from "react";
import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


const category =()=>{
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState<number[]>([50, 200]);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  
    const colors = ["black", "red", "yellow", "pink", "brown", "gray"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const styles = ["Casual", "Formal", "Party", "Gym"]

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

              {/* Filters and Products */}
      <div className="container mx-auto mt-6 flex space-x-18">
        {/* Sidebar */}
        <aside className="w-64">
          <div>
            {/* Breadcrumb */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="text-lg text-blue-600 hover:underline"
            >
              Home &gt; Casual
            </button>

            {showFilters && (
              <div className="bg-white border rounded-lg shadow-lg p-4 mt-4 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-lg">Categories</h3>
                  <br/>
                  <ul className="space-y-2 font-semibold text-gray-500">
                    <li className="hover:text-blue-600 cursor-pointer">T-Shirts</li>
                    <li className="hover:text-blue-600 cursor-pointer">Shorts</li>
                    <li className="hover:text-blue-600 cursor-pointer">Shirts</li>
                    <li className="hover:text-blue-600 cursor-pointer">Hoodies</li>
                    <li className="hover:text-blue-600 cursor-pointer">Jeans</li>
                  </ul>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-lg">Price Range</h3>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([parseInt(e.target.value), priceRange[1]])
                    }
                    className="w-full mt-2 font-semibold"
                  />
                  <div className="text-sm text-gray-600 flex justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="font-semibold text-lg">Colors</h3>
                  <div className="flex space-x-2 mt-2">
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "border-blue-600"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color }}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="font-semibold text-lg">Size</h3>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-4 text-sm border rounded ${
                          selectedSize === size
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Styles */}
                <div>
                  <h3 className="font-semibold text-lg">Dress Style</h3>
                  <div className="space-y-2 mt-2 font-semibold text-gray-500">
                    {styles.map((style) => (
                      <button
                        key={style}
                        onClick={() => setSelectedStyle(style)}
                        className={`block w-full py-2 px-4 text-left border rounded ${
                          selectedStyle === style
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Apply Button */}
                <button className="w-full py-3 bg-black text-white rounded mt-4 hover:bg-gray-800">
                  Apply Filter
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Products Section */}

            {/* Grid Container for Items */}
            <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 items-start p-10"
        >


          {/* Gradient Graphic T-Shirt */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
            <img
              src="/Frame 33 (2).jpg"
              alt="Skinny fit jeans"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Courage Graphic T-Shirt</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐ 4.5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$145</p>
          </div>

          {/* Polo With Tipping Details */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
            <img
              src="/Frame 34 (1).jpg"
              alt="Checkered shirt"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Loose Fit Bermuda Shorts</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$180</p>
          </div>

          {/* Black Stripped T-Shirt */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
            <img
              src="/Frame 38 (1).jpg"
              alt="Sleeve stripped t-shirt"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
                        <p className="text-lg font-semibold mb-2">Faded Skinny Jeans </p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐ 4/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">$120</p>
          </div>
                    {/* Skinny Fit Jeans */}
                    <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
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
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
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
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
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
                    {/* Vertical Stripped Shirt */}
                    <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
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
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
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
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4 hover:shadow-lg hover:scale-105">
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




      </div>
      </div>
      <br/>
      <br/>
      <br/>










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
export default category