import './index.css';
import { Document, Page, pdfjs  } from 'react-pdf';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
const axios = require('axios');

const Invoice = ({orderId}) => {
    const [pageNumber, setPageNumber] = useState(1);
    const { id } = useParams();

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

 

    return (
        // <h2>he</h2>
        <Document
        file={"https://swiftys-server.glitch.me/api/orders/getInvoice/" + id} 
        >
            <Page pageNumber={pageNumber} />
        </Document>
    )
}

export default Invoice