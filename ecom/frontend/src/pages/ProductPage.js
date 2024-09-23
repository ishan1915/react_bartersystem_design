import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../productpage.css';

const ProductPage = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialize navigate

    useEffect(() => {
        const fetchItems = async () => {
            const token = localStorage.getItem('access_token');

            if (!token) {
                // Redirect to login if token is missing
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get('http://localhost:8000/api/items/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setItems(response.data);
            } catch (err) {
                setError('Error fetching items');
                if (err.response && err.response.status === 401) {
                    // Redirect to login on unauthorized access
                    navigate('/login');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, [navigate]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="product-page">
            <h2>Product List</h2>
            <div className="item-list">
                {items.length === 0 ? (
                    <p>No items available.</p>
                ) : (
                    items.map((item) => (
                        <div className="item-card" key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductPage;
