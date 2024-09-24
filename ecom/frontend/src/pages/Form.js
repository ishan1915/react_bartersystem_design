import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(' http://127.0.0.1:8000/api/formdata/', { name, email, message });
            alert('Submission successful!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <><Navbar /><form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            <label>Email</label>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            <label>Message</label>
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit">Submit</button>
        </form>
        <Footer />
        </>
    );
};

export default Form;
