import React, { useState } from 'react';
import axios from 'axios';
import '../style1.css'
import '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login/', { username, password });
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);
            alert('Logged in successfully');
            navigate('/dashboard'); // Redirect to dashboard
        } catch (error) {
            alert('Error logging in');
        }
    };

    return (
        <><Navbar /><form onSubmit={handleLogin}>
            <label>Username</label>
            <input type="text"  placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
            <label>Password</label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Log In</button>
        </form></>
    );
};

export default Login;
