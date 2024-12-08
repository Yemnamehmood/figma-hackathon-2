import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
//import addtocart from "./addtocart";
import { useRouter } from "next/router";



const ProductDetail = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("productDetails");
  const router = useRouter(); // Navigation ke liye useRouter hook

  const handleAddToCart = () => {
    // Navigate to the cart page
    router.push("/addtocart");
  };



  return (
    
    <div className="max-w-7xl mx-auto p-4">
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
      </div>

        
  {/* Main Grid Section */}
  <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr] gap-6 items-start mt-8">
    
    {/* Left Section with main front image & 5,6 stacked images */}
    <div className="flex md:flex-row gap-4 items-start">
      
      {/* Side-by-side images */}
      <div className="w-1/4 flex flex-col gap-2">
        <img
          src="/image 5.jpg"
          alt="Back 1"
          className="w-45 h-auto rounded-lg object-cover"
        />
        <img
          src="/image 6.jpg"
          alt="Back 2"
          className="w-45 h-auto rounded-lg object-cover"
        />
      </div>

      {/* Main Front Image */}
      <div className="w-3/4 p-4">
        <img
          src="/image 1.jpg"
          alt="Main Front Shirt"
          className="w-50 h-auto rounded-lg object-cover"
        />
      </div>
      
    </div>


      {/* Right Section: Product Details */}
      <div className="space-y-6 md:ml-6">
        <h1 className="text-2xl font-semibold">ONE LIFE GRAPHIC T-SHIRT</h1>
        <div className="flex items-center gap-2">
          <div className="text-yellow-500">★★★★★</div>
          <span className="text-gray-500">(5/5)</span>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-2xl font-semibold text-gray-900">$260</p>
          <p className="text-lg text-gray-500 line-through">$300</p>
          <p className="text-red-500 font-semibold">-40% OFF</p>
        </div>
        <p className="text-gray-600">
          This graphic t-shirt which is perfect for any occasion. Crafted
          from a soft and breathable fabric, it offers superior comfort and
          style.
        </p>
      
    


          {/* Colors */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Select Colors</h2>
            <div className="flex gap-4">
              {["brown", "black", "green"].map((color) => (
                <div
                  key={color}
                  className={`w-8 h-8 rounded-full border cursor-pointer ${
                    selectedColor === color ? "ring-4 ring-gray-400" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Choose Size</h2>
            <div className="flex gap-4">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-gray-300 border-gray-400"
                      : "bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4">
            <button
              className="px-3 py-1 border rounded-md"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className="px-3 py-1 border rounded-md"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
            <button 
            className="ml-4 px-6 py-3 bg-black text-white rounded-lg"
            onClick={handleAddToCart} // Button ka onClick handler
            >


              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Tabs Section */}
<div className="mt-10">
  {/* Tabs Header */}
  <div className="flex justify-between items-center border-b gap-8 pb-2 font-semibold w-400 ">
    {["productDetails", "ratingAndReviews", "faqs"].map((tab) => (
      <button
        key={tab}
        className={`px-4 py-2 text-sm ${
          activeTab === tab
            ? "border-b-2 border-black text-black"
            : "text-gray-500 hover:text-black"
        } transition-all duration-200 ease-in-out`}
        onClick={() => setActiveTab(tab)}
      >
        {tab === "productDetails"
          ? "Product Details"
          : tab === "ratingAndReviews"
          ? "Rating & Reviews"
          : "FAQs"}
      </button>
    ))}
  </div>

  {/* Active Tab Content */}
  {activeTab === "productDetails" && (
    <div className="mt-4 text-gray-600 text-sm leading-6 font-semibold">
      Detailed product information. Learn about materials, sizes, features, and more.
    </div>
  )}

  {activeTab === "ratingAndReviews" && (
    <div className="mt-4 text-sm leading-6 font-semibold">
      <h2 className="text-lg font-semibold mb-2">All Reviews (451)</h2>
      <button className="text-sm px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-200">
        Write a Review
      </button>
      {/* Placeholder for review grid */}
      <div className="mt-4 text-gray-500">Review content grid goes here...</div>
    </div>
  )}

  {activeTab === "faqs" && (
    <div className="mt-4 text-gray-600 text-sm leading-6 font-semibold">
      Frequently Asked Questions. Find answers to common inquiries here.
    </div>
  )}

      <br/>
      <br/>
      {/* Review Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        {/* Dynamically Split Images into Rows of Two */}
        {[
          "/Frame 27.jpg",
          "/Frame 26.jpg",
          "/Frame 25.jpg",
          "/Frame 24 (1).jpg",
          "/Frame 23.jpg",
        ].map((item, index) => (
            <div
              key={index}
              className="overflow-hidden flex items-center justify-center"
            >
              {/* Adjusted and Resized Image */}
              <img
                src={item}
                alt={`Review Image ${index + 1}`}
                className="w-100% h-100% object-cover" // Changed to a larger image size
              />
            </div>
          ))}
      </div>
    </div>
            {/* "You Might Also Like" Section */}
            <div className="mt-14">
           <h2
            className="text-2xl font-bold text-center text-gray-900 mb-6"
            style={{ fontFamily: "CF" }}
           >
            YOU MIGHT ALSO LIKE
        </h2>
        </div>

                {/* Grid Container for Items */}
                <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-start"
        >
          {/* Polo With Contrast Trims */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
            <img
              src="/Frame 32 (2).jpg"
              alt="T-shirt with tape details"
              className="w-full h-[200px] object-cover rounded-[20px] mb-2"
            />
             <p className="text-lg font-semibold mb-2"> Vertical Stripped Shirt</p>

            <div className="flex items-center mb-2">
              <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ 5/5</span>
            </div>
            <p className="text-lg font-semibold mb-2">
              <span className="text-black">$212</span>{" "}
              <span className="line-through text-red-500">$242</span>{" "}
              <span className="text-red-500">-20% Off</span>
            </p>
          </div>

          {/* Gradient Graphic T-Shirt */}
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
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
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
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
          <div className="bg-gray-100 shadow-md rounded-[20px] p-4">
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
        </div>
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

export default ProductDetail;

