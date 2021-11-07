import './index.css';
import { Document, Page, pdfjs  } from 'react-pdf';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const Invoice = () => {
    const [numPages, setNumPages] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

    const onDocumentLoadSuccess = ({ numPages: nextNumPages }) => {
        setNumPages(nextNumPages);
      }

    return (
        <Document
        file={"https://swiftys-server.glitch.me/api/orders/getInvoice/" + id}
        onLoadSuccess={onDocumentLoadSuccess} 
        >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
        </Document>
    )
}

export default Invoice