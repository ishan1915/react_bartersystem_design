// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products'; // Import the Products component
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import UserDashboard from './pages/Userdashboard';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path="/product" element={<Products />} /> {/* Use Products component */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
      </Routes>
       
      <Footer />
    </div>
  );
}

export default App;
