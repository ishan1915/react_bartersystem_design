import React, { useState } from 'react';
import axios from 'axios';
import '../components/Navbar'
import Navbar from '../components/Navbar';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register/', { username, email, password });
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };

    return (
        <><Navbar /><form onSubmit={handleSignup}>
            <label>Username</label>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <label>Email</label>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <label>Password</label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
        </form></>
    );
};

export default Signup;
