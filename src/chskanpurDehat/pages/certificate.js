// PDFSection.js
import React from 'react';
import PDFViewer from './pdf';  // Update the import path
import pdf1 from "../../assets/NOC.pdf";

const PDFSection = () => {
  const pdfs = [pdf1];

  return (
    <div>
      {pdfs.map((pdf, index) => (
        <div key={index}>
          <PDFViewer pdfUrl={pdf} />
        </div>
      ))}
    </div>
  );
};

export default PDFSection;
