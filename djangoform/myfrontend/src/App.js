import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Submissions from './components/Submissions';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
             <Routes>
                <Route path="/" element={<Home />} /> {/* This should render your Home component */}
                <Route path="/form" element={<Form />} />
                <Route path="/submissions" element={<Submissions />} />
            </Routes>
        </Router>
    );
};

export default App;
