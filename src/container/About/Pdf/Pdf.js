import { useState } from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import pdf from '../../../assets/pdf/20BIT303-Resume - Copy.pdf';

const Pdf = () => {
    const [defaultPdfFile] = useState(pdf)
return  (
    <div className="pdf__container">
        <p>Bonjour</p>
    constDefaultLayoutPluginInstance = defaultLayoutPlugin();
    </div>
);
}

export default Pdf;