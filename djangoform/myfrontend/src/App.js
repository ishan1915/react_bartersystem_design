import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Submissions from './components/Submissions';
import Home from './pages/Home';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
             <Routes>
                <Route path="/" element={<Home />} /> {/* This should render your Home component */}
                <Route path="/form" element={<Form />} />
                <Route path="/submissions" element={<Submissions />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
