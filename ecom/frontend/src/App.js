import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Form from './pages/Form';
import ProductPage from './pages/ProductPage';

const App = () => (
    <Router>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/form" element={<Form />} />
            <Route path="/product" element={<ProductPage />} />


        </Routes>
    </Router>
);

export default App;
