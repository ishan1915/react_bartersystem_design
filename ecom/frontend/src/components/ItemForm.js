import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ setItems }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('access_token');

        const newItem = { title, description, price }; // No user field here

        try {
            const response = await axios.post('http://localhost:8000/api/items/', newItem, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setItems((prev) => [...prev, response.data]); // Add the newly created item
            setTitle(''); // Reset fields after submission
            setDescription('');
            setPrice('');
        } catch (error) {
            console.error('Error adding item:', error.response?.data || error.message);
            alert('Error adding item');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
