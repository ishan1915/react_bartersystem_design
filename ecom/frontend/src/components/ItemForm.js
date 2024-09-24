import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = ({ setItems }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null); // Initialize as null

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('access_token');

        // Create FormData object to handle file upload
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        if (image) {
            formData.append('image', image); // Append the image file
        }

        try {
            const response = await axios.post('http://localhost:8000/api/items/', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data', // Important for file uploads
                },
            });
            setItems((prev) => [...prev, response.data]); // Add the newly created item
            // Reset fields after submission
            setTitle('');
            setDescription('');
            setPrice('');
            setImage(null);
        } catch (error) {
            console.error('Error adding item:', error.response?.data || error.message);
            alert('Error adding item');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <input
                type="file"
                name="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])} // Set the file correctly
                required
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default ItemForm;
