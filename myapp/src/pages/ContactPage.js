// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../components/ContactForm';
//import Footer from '../components/Footer';
//import Header from '../components/Header';
import '../styles/contactform.css';

const ContactPage = () => {
  return (
    <div>
       
      <section className="contact">
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
       
    </div>
  );
}

export default ContactPage;
