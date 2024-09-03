
import React from 'react';
import pdfw from "../assets/pdfw.png";
import '../styles/visadetailspdf.css';

function VisaDetailsPdf({ endpointUrl, cvId ,filename}) {
    let img1 = pdfw;

    const handleDownload = async () => {
        const accessToken = localStorage.getItem('token'); // Get the access token from local storage or wherever it's stored

        try {
            const response = await api.get(`${endpointUrl}/${cvId}`, {           
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Include authorization header with the token
                },
                responseType: 'blob', // Specify that the response should be treated as a blob (binary data)
            });
            console.log("Response:", response);

            // Check if content-disposition header is present and extract filename
            let fileName = filename; // Default file name
            // const contentDisposition = response.headers['content-disposition'];
            // console.log("Content-Disposition:", contentDisposition);
            // if (contentDisposition) {
            //     const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            //     const matches = filenameRegex.exec(contentDisposition);
            //     if (matches && matches[1]) {
            //         fileName = matches[1].replace(/['"]/g, ''); // Remove quotes if present
            //     }
            // }

            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            window.URL.revokeObjectURL(url);

            console.log("PDF downloaded successfully.");
        } catch (error) {
            console.error("Error downloading PDF:", error.message);
        }
    };

    return (
        <div className='img-types align-items-center'>
            <div className='img-panel flex'>
                <button onClick={handleDownload} className='download-btn-sk'>
                    <img src={img1} className='single-user' alt='PDF Icon' />
                </button>
            </div>
        </div>
    )
}

export default VisaDetailsPdf
