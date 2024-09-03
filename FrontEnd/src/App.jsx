import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import theme from './utils/Theme.jsx'; // Import custom theme

import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import VisaProcessingPersonal from './pages/VisaProcessingPersonal.jsx';
import VisaProcessingTravel from './pages/ViisaProcessingTravel.jsx'


function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap  app with ThemeProvider */}
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: '#eceff1' }}>
          <Routes>
            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />
            <Route path="/VisaProcessingPersonal" element={<VisaProcessingPersonal />} />  
            <Route path="/VisaProcessingTravel" element={<VisaProcessingTravel />} />         
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
