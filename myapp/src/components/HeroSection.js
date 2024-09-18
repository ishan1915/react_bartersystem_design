import React from 'react';
//import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to E-Barter Trading System</h1>
                <p>Your one-stop shop for the best products</p>
                <a href="#products" className="btn">Shop Now</a>
            </div>
        </section>
    );
}

export default HeroSection;
