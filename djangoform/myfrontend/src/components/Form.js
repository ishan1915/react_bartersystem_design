import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/formdata/', { name, email, message });
            alert('Submission successful!');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Error submitting form', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
