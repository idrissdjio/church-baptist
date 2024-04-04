import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Page from '../page/Page';
import Map from '../map/Map';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactPage.css';

const ContactPage = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      to_name: 'Church Office',
      from_name: name,
      from_email: email,
      phone: phone,
      message: message
    };

    const serviceId = 'service_pwgqc2r';
    const templateId = 'template_c7llmfj';
    const userId = 'inEC8F9jEosvthHqj';

    emailjs.send(serviceId, templateId, formData, userId)
      .then(response => {
        toast.success('Your message has been sent successfully! The pastor has received your email and will get back to you as soon as possible.');
      })
      .catch(err => {
        toast.error('Failed to send message, please try again later.');
      });
  };

  return (
    <Page>
      <ToastContainer />
      <div className="contact-page">
        <Map fullWidth={true}/>
        {/* <a 
          href="https://maps.google.com/?q=2409+E+Park+Place,+Milwaukee,+WI+53211" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="directions-btn" 
          style={{ display: 'block', margin: '0 auto', backgroundColor: '#0C2D57', color: '#FFFFFF', padding: '10px 15px', textDecoration: 'none', borderRadius: '5px' }}
        >
          Get Directions
        </a> */}
        <br/>
        <a href="tel:+14143643779" className="call-pastor-btn">Call the Pastor</a>
        <a href="tel:+14144602875" className="call-pastor-btn">Call for a Ride</a>
        <a href="tel:+12622340030" className="call-pastor-btn">Call for Shuttle</a>
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
