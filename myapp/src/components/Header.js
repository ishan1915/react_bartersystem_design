import React from 'react';
//import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="header">
            <nav>
                <h1 className="logo">E-Shop</h1>
                <ul className="nav-links">
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
