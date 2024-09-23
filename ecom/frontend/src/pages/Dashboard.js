import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';

const Dashboard = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const token = localStorage.getItem('access_token');
            try {
                const response = await axios.get('http://localhost:8000/api/items/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setItems(response.data); // Set items for logged-in user
            } catch (error) {
                console.error('Error fetching items', error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Your Dashboard</h1>
            <ItemForm setItems={setItems} />
            <ItemList items={items} />
        </div>
    );
};

export default Dashboard;
