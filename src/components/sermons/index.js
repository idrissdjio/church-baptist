import React from 'react';
import PDFViewer from './PDFViewer';
import samplePDF from './seeker.pdf'; // Make sure to have a PDF file named sample.pdf in your src folder

function App() {
  return (
    <div className="App">
      <PDFViewer file={samplePDF} />
    </div>
  );
}

export default App;
