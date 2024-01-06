    // PDFViewer.js
    import React, { useState } from 'react';
    import { Document, Page } from 'react-pdf';
    import { AiOutlineDownload } from 'react-icons/ai';

    const PDFViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleDownload = () => {
        // Add logic to trigger the PDF download
        window.open(pdfUrl, '_blank');
    };

    return (
        <div>
        <div>
            <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            >
            <Page pageNumber={pageNumber} />
            </Document>
        </div>
        <div>
            <p>
            Page {pageNumber} of {numPages}
            </p>
            <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
            Previous
            </button>
            <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
            Next
            </button>
            <button onClick={handleDownload}>
            <AiOutlineDownload /> Download
            </button>
        </div>
        </div>
    );
    };

    export default PDFViewer;
