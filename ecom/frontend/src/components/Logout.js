// Logout.js
import React from 'react';
import axios from 'axios';

const Logout = ({ setItems }) => {
    const handleLogout = async () => {
        const token = localStorage.getItem('refresh_token'); // Adjust based on your setup

        try {
            await axios.post('http://localhost:8000/api/logout/', { refresh: token }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Clear tokens from localStorage
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            // Optionally, you can also reset state or redirect
            setItems([]); // Clear items if needed
            alert('Successfully logged out.');
        } catch (error) {
            console.error('Error logging out:', error);
            alert('Logout failed. Please try again.');
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
