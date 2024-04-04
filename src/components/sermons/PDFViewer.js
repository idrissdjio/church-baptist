// import React, { useState, useRef, useEffect } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import emailjs from 'emailjs-com';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Set up the workerSrc for pdfjs
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const PDFViewer = ({ file }) => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageWidth, setPageWidth] = useState(0);
//   const viewerRef = useRef();

//   useEffect(() => {
//     const updateWidth = () => {
//       const viewerWidth = viewerRef.current ? viewerRef.current.offsetWidth : 0;
//       setPageWidth(viewerWidth * 0.9); // Adjusted for padding and border
//     };

//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, [viewerRef]);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = {
//       to_name: 'Church Office',
//       from_name: name,
//       from_email: email,
//       phone: phone,
//       message: message
//     };

//     const serviceId = 'service_pwgqc2r';
//     const templateId = 'template_c7llmfj';
//     const userId = 'inEC8F9jEosvthHqj';

//     emailjs.send(serviceId, templateId, formData, userId)
//       .then(response => {
//         toast.success('Your message has been sent successfully!');
//       })
//       .catch(err => {
//         toast.error('Failed to send message, please try again later.');
//       });
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', margin: '1rem' }}>
//       <div ref={viewerRef} style={{ width: '70%', height: '100%', marginRight: '1rem', overflowY: 'scroll', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f8f8' }}>
//         <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
//           {Array.from(new Array(numPages), (el, index) => (
//             <Page key={`page_${index + 1}`} pageNumber={index + 1} width={pageWidth} />
//           ))}
//         </Document>
//       </div>
//       <div style={{ width: '28%', padding: '1rem' }}>
//         <ToastContainer />
//         <form onSubmit={handleSubmit} className="contact-form">
//           <h2>Message Us</h2>
//           <div className="form-group">
//             <label htmlFor="name">Name*</label>
//             <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email*</label>
//             <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone*</label>
//             <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Your Message*</label>
//             <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
//           </div>
//           <button type="submit" style={{ backgroundColor: '#0C2D57', color: 'white' }}>Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PDFViewer;

import React, { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Set up the workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(0);
  const viewerRef = useRef();

  useEffect(() => {
    const updateWidth = () => {
      const viewerWidth = viewerRef.current ? viewerRef.current.offsetWidth : 0;
      setPageWidth(viewerWidth * 0.9); // Adjusted for padding and border
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [viewerRef]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

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
        toast.success('Your message has been sent successfully!');
      })
      .catch(err => {
        toast.error('Failed to send message, please try again later.');
      });
  };

  return (
    <div style={{ margin: '1rem' }}>
      <h1 style={{marginBottom: '20px', color: '#0C2D57' }}>Learn the Bible</h1>
      <div style={{ display: 'flex', flexDirection: 'row', height: 'calc(100vh - 60px)' }}>
        <div ref={viewerRef} style={{ width: '70%', height: '100%', marginRight: '1rem', overflowY: 'scroll', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f8f8f8' }}>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} width={pageWidth} />
            ))}
          </Document>
        </div>
        <div style={{ width: '28%', padding: '1rem' }}>
          <ToastContainer />
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Message Us</h2>
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
            <button type="submit" style={{ backgroundColor: '#0C2D57', color: 'white' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
