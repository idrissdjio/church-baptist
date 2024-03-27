import React, { useState } from 'react';
import Page from '../page/Page';
import Map from '../map/Map';
import './ContactPage.css';

const ContactPage = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);
  };

  return (
    <Page>
      <Map fullWidth={true}/>
      <div className="contact-page">
        <br/>
        <a href="tel:+14143643779" className="call-pastor-btn">Call the Pastor</a>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2 style={{ color: '#0C2D57' }}>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone*</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message*</label>
            <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: '#0C2D57', color: '#FFFFFF' }}>Send Message</button>
        </form>
      </div>
    </Page>
  );
};

export default ContactPage;
