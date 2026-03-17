import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './ResumePDF';
import './DownloadButton.css';

interface DownloadButtonProps {
    targetRef?: React.RefObject<HTMLElement | null>; // Kept for compatibility but unused
}

export const DownloadButton: React.FC<DownloadButtonProps> = () => {
    return (
        <div style={{ display: 'inline-block' }}>
            <PDFDownloadLink
                document={<ResumePDF />}
                fileName="Gleb_Chernenko_Resume.pdf"
                className="download-btn"
                style={{
                    textDecoration: 'none',
                    // Styles matching your existing button CSS loosely if needed, 
                    // or rely on class name
                }}
            >
                {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
            </PDFDownloadLink>
        </div>
    );
};
