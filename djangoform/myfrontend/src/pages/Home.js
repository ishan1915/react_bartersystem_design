import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductList from '../components/Productlist';
import Footer from '../components/Footer';
import '../styles.css';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ProductList />
            <Footer />
        </div>
    );
};

export default Home;
