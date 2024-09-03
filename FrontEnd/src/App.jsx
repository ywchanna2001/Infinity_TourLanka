import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TourGenerating from './pages/TourGenerating';
import Footer from './assets/components/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import VisaApproveTable from './components/VisaApproveTable.jsx';
import VisaRejectTable from './components/VisaRejectTable.jsx';
import VisaRequestedTable from './components/VisaRequestedTable.jsx';

import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import theme from './utils/Theme.jsx'; // Import custom theme
import FeatureCard from './components/FeatureCard.jsx';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}> {/* Wrap app with ThemeProvider */}
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: '#eceff1' }}>
          <Routes>
            {/* Set TourGenerating as the default route */}
            <Route path="/" element={<TourGenerating />} />
            <Route path="/TourGenerating" element={<TourGenerating />} />
            {/* Add more routes here as needed */}
            {/* <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} /> */}


            <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested visa" />} />
            <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected visa" />} />
            <Route path="/VisaApproved" element={<VisaApproveTable title="Approved visa"  />} />


            <Route path="/FeatureCard" element={<FeatureCard />} />
          </Routes>
         {/* Move Footer inside BrowserRouter */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
    <Footer />
    </>
  );
}

export default App;
