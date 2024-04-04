import React, {useState} from 'react';
import './SermonsPage.css'
import PDFViewer from './PDFViewer';
import samplePDF from './seeker.pdf';




const SermonsPage = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  var style = {
    minHeight:"700px",
    minWidth:"100%",
    maxWidth:"100%",
    border: "1px solid #ddd",
    boxSizing: "border-box"
  }

  return (
    <PDFViewer file={samplePDF} />
    // <div className="sermons-page">
    //   <h1>Sermons</h1>
    //   <hr/>
    //   <div>
    //   <iframe width="50%" height="200" src="https://clyp.it/bhcctodr/widget" frameborder="0"></iframe>
    //   <iframe width="50%" height="200" src="https://clyp.it/4rkjosp1/widget" frameborder="0"></iframe>
    //   </div>
    //   <form onSubmit={handleSubmit} className="sermons-form">
    //     <h2>Message Us Here!</h2>
    //     <div className="form-group">
    //       <label htmlFor="name">Name</label>
    //       <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="email">Email</label>
    //       <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     </div>
    //     <div className="form-group">
    //       <label htmlFor="message">Message</label>
    //       <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
    //     </div>
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
  )
}

export default SermonsPage;
