import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfDownloader = ({ pdfUrls }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedPdf, setSelectedPdf] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const downloadPdf = async (pdfUrl, pdfName) => {
        try {
            const response = await fetch(pdfUrl);
            const contentDisposition = response.headers.get('content-disposition');
            const fileNameMatch = contentDisposition && contentDisposition.match(/filename="(.+?)"/);

            let fileName = pdfName || 'downloaded.pdf';

            if (fileNameMatch && fileNameMatch[1]) {
                fileName = fileNameMatch[1];
            }

            const blob = await response.blob();
            saveAs(blob, fileName);
        } catch (error) {
            console.error('Error downloading PDF', error);
        }
    };

    const handlePdfButtonClick = (pdfUrl, pdfName) => {
        setSelectedPdf(pdfUrl);
        downloadPdf(pdfUrl, pdfName);
    };

    return (
        <div className="relative ">
            <div className="container p-32 bg-stone-100 rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    {pdfUrls.map(({ url, name }, index) => (
                        <div key={index} className="grid md:w-full">
                            <div className="flex flex-col mb-5 items-center">
                                <p className="text-center md:text-2xl text-gray-700 mb-2">{name}</p>
                                <button
                                    className="bg-red-500 text-white w-52  p-2 rounded-md hover:bg-red-600"
                                    onClick={() => handlePdfButtonClick(url, name)}
                                >
                                    Download PDF {index + 1}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedPdf && (
                    <div className="mt-8 h-auto">
                        <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess} className="w-screen">
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <p className="mt-4 text-gray-700">
                            Page {pageNumber} of {numPages}
                        </p>
                    </div>
                )}
            </div>
        </div>

    );
};

export default PdfDownloader;
