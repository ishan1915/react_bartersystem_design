import React from 'react';
import '../styles.css';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">ShopNow</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="/form">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
