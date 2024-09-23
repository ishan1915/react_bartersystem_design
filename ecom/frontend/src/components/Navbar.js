import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'
const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="logo">ShopNow</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="/form">Contact</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Signup</a></li>

                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
