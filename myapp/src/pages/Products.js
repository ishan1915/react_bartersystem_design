// src/Products.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';

const Products = () => {
  return (
    <div>
      <HeroSection />
      <div className="product-grid">
        <ProductShowcase title="Product 1" price=" ₹ 2000 "   image="/images/h.jpg" /> 
        <ProductShowcase title="Product 2" price="₹ 3000 " />
        <ProductShowcase title="Product 3" price="₹ 4000 " />
        <ProductShowcase title="Product 4" price="₹ 5000 " />
        
      </div>
    </div>
  );
}

export default Products;
