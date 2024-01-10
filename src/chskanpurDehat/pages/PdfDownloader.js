import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { saveAs } from 'file-saver';
import { FaFilePdf } from "react-icons/fa";
import Footer from '../../pages/footer';
import { FaHome } from "react-icons/fa";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfDownloader = ({ pdfUrls }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedPdf, setSelectedPdf] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const downloadPdf = async (pdfUrl, pdfName, pdftitle) => {
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

            <div className="container w-screen flex justify-center items-center p-32 bg-stone-100 rounded-lg">

                <div className="grid w-screen  grid-cols-1 gap-4">
                    <div className='flex flex-col  gap-5'>
                        <div className='flex gap-1'>
                            <FaHome className='m-1' />
                            <span>|</span>
                            <div>About</div>
                            <span>|</span>
                            <div>Accreditations </div>
                        </div>
                    </div>
                    <h1 className='md:text-7xl ml-10 text-3xl mb-20 '>
                        Accreditations
                    </h1>
                    {pdfUrls.map(({ url, name, title }, index) => (
                        <div key={index} className="grid md:w-3/4 ml-10">

                            <div className="flex flex-col bg-white mb-5 items-start p-10 gap-5">
                                <p className="text-center md:text-2xl text-gray-700 mb-2">{name}</p>
                                <p className="text-center md:text-xl text-gray-700 mb-2">{title}</p>
                                <button
                                    className=" text-red-600 border-b-2 border-red-600 border-r-2 border-t-2 w-60 flex justify-center items-center gap-2  p-2 rounded-md hover:bg-red-600"
                                    onClick={() => handlePdfButtonClick(url, name)}
                                >
                                    <FaFilePdf />   Download Certificate {index + 1}
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
            <Footer />
        </div>

    );
};

export default PdfDownloader;
