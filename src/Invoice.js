import './index.css';
import { Document, Page, pdfjs  } from 'react-pdf';
import { useState, useEffect } from 'react';
const axios = require('axios');

const Invoice = () => {
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

 

    return (
        // <h2>he</h2>
        <Document
        file="https://swiftys-server.glitch.me/api/orders/getInvoice"
        >
            <Page pageNumber={pageNumber} />
        </Document>
    )
}

export default Invoice