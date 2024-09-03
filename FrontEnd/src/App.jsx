import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import VisaApproveTable from './components/VisaApproveTable.jsx';
import VisaRejectTable from './components/VisaRejectTable.jsx';
import VisaRequestedTable from './components/VisaRequestedTable.jsx';

import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import theme from './utils/Theme.jsx'; // Import custom theme

function App() {
  return (

    // <div>
    //   <VisaApproveTable title="Approved Visa" />
    //   <VisaRejectTable title="Rejected Visa" />
    //   <VisaRequestedTable title="Requested Visa" />
    // </div>
    <ThemeProvider theme={theme}> {/* Wrap  app with ThemeProvider */}
      <BrowserRouter>
        <div className="App" style={{ backgroundColor: '#eceff1' }}>
          <Routes>
            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} /> 
            <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested Visa" />} />
            <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected Visa" />} />  
            <Route path="/VisaApproved" element={<VisaApproveTable title="Approved Visa" />} />           
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
