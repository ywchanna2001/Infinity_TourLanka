import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 

import TourGenerating from './pages/TourGenerating';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import theme from './utils/Theme.jsx'; // Import custom theme

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap app with ThemeProvider */}
      <BrowserRouter> {/* BrowserRouter should wrap the entire routing structure */}
        <div className="App" style={{ backgroundColor: '#eceff1' }}>
          <Header /> {/* Move Header inside BrowserRouter */}
          <Routes>
            {/* Set TourGenerating as the default route */}
            <Route path="/" element={<TourGenerating />} />
            <Route path="/TourGenerating" element={<TourGenerating />} />
            {/* Add more routes here as needed */}
            {/* <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} /> */}
          </Routes>
          <Footer /> {/* Move Footer inside BrowserRouter */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
