import { Document, Page, pdfjs  } from 'react-pdf';
import { useState, useEffect } from 'react';
import samplePDF from './sample.pdf';

const Invoice = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

 

    return (
        // <h2>he</h2>
        <Document
        file={samplePDF}
        >
            <Page pageNumber={pageNumber} />
        </Document>
    )
}

export default Invoice