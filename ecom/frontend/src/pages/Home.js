import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import Footer from '../components/footer';
import '../styles.css';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <ProductList />
            <Footer />
        </div>
    );
};

export default Home;
