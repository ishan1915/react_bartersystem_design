import React from 'react';
import Product from './Product';
import '../styles.css';

const products = [
    { id: 1, name: 'Product 1', price: 29.99,   image : "/images/h.jpg"},
    { id: 2, name: 'Product 2', price: 39.99, image: "/images/h.jpg"},
    { id: 3, name: 'Product 3', price: 49.99, image:  "/images/h.jpg" },
    { id: 4, name: 'Product 4', price: 59.99, image:  "/images/h.jpg" },
];

const ProductList = () => {
    return (
        <section className="products">
            <h2>Featured Products</h2>
            <div className="product-grid">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
