import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../productpage.css'
const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/items/');
                setItems(response.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    return (
        <div>
            <h1>Items for Sale</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        {item.image && <img src={`${item.image}`} alt={item.title} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
