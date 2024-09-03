import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 

import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import theme from './utils/Theme.jsx'; // Import custom theme

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap  app with ThemeProvider */}
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: '#eceff1' }}>
          <Routes>
            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />         
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
