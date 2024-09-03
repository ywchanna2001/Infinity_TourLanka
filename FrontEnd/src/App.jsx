import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TourGenerating from './pages/TourGenerating';
import Footer from './assets/components/Footer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 

import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import theme from './utils/Theme.jsx'; // Import custom theme
import VisaProcessingPayment from './pages/VisaProcessingPayment.jsx';



function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap  app with ThemeProvider */}
      <BrowserRouter>
        <div className="App flex-grow" style={{ backgroundColor: '#eceff1' }}>
          <Routes>
            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />    
            <Route path="/VisaProcessingPayment" element={<VisaProcessingPayment />} />       
          </Routes>
        </div>
        <Footer /> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

