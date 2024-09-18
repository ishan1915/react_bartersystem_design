// src/UserDashboard.js
import React, { useState } from 'react';
import '../styles/Userdashboard.css'; // Import the CSS file

const UserDashboard = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    contact: '123-456-7890',
    address: '123 Main St, Anytown, USA'
  });

  const [editMode, setEditMode] = useState(false);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    quantity: '',
    description: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value
    });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? newItem : item
      );
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems([...items, newItem]);
    }
    setNewItem({ name: '', price: '', quantity: '', description: '' });
  };

  const handleEditItem = (index) => {
    setNewItem(items[index]);
    setEditingIndex(index);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    console.log('Updated User Info:', userInfo);
    // Here you can add functionality to save the user info
  };

  return (
    <div>
      <h1>User Dashboard</h1>

      <h3>Your Personal Information</h3>
      <p><strong>Name:</strong> {userInfo.name}</p>
      <p><strong>Email:</strong> {userInfo.email}</p>
      <p><strong>Contact:</strong> {userInfo.contact}</p>
      <p><strong>Address:</strong> {userInfo.address}</p>
      <button onClick={() => setEditMode(!editMode)}>
        {editMode ? 'Cancel' : 'Edit Personal Information'}
      </button>

      {editMode && (
        <form onSubmit={handleSubmit} className="form">
          <h2>Update Personal Information</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={userInfo.contact}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={userInfo.address}
            onChange={handleChange}
          />
          <button type="submit">Update Info</button>
        </form>
      )}

      <form onSubmit={addItem} className="form">
        <h2>{editingIndex !== null ? 'Edit Item' : 'Add Item'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={newItem.name}
          onChange={handleItemChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newItem.price}
          onChange={handleItemChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleItemChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newItem.description}
          onChange={handleItemChange}
        />
        <button type="submit">{editingIndex !== null ? 'Update Item' : 'Add Item'}</button>
      </form>

      <h2>Items List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price} (Quantity: {item.quantity})<br />
            Description: {item.description}
            <button onClick={() => handleEditItem(index)}>Edit</button>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;
