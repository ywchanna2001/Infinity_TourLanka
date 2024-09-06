import React from 'react';
import bannerImage from '../assets/Images/VisaProcessing/Banner.jpg';

function VisaProcessingBackground({ children }) {
  return (
    <div style={{ 
        position: 'relative', 
        minHeight: '100vh', // Ensure it covers at least the full viewport height
        height: 'auto',
        backgroundImage: `url(${bannerImage})`,
         backgroundSize: 'cover', 
        // backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    }}>
      <div style={{
          position: 'relative', // Changed from absolute to relative
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      }}>
        {children}
      </div>
    </div>
  );
}

export default VisaProcessingBackground;