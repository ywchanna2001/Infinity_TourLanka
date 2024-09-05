import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import theme from './utils/Theme.jsx'; // Import custom theme
import VisaProcessingPayment from './pages/VisaProcessingPayment.jsx';

import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import VisaProcessingPersonal from './pages/VisaProcessingPersonal.jsx';
import VisaProcessingTravel from './pages/ViisaProcessingTravel.jsx';
import VisaProcessingUpload from './pages/VisaProcesssingUpload.jsx';

import VisaApproveTable from './components/VisaApproveTable.jsx';
import VisaRejectTable from './components/VisaRejectTable.jsx';
import VisaRequestedTable from './components/VisaRequestedTable.jsx';

import TourGenerating from './pages/TourGenerating';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
// import theme from './utils/Theme.jsx'; // Import custom theme
import FeatureCard from './components/FeatureCard.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap app with ThemeProvider */}
      <BrowserRouter> {/* BrowserRouter should wrap the entire routing structure */}
        <div className="App" style={{ backgroundColor: '#eceff1' }}>
          <Header />
          <Routes>

            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />
            <Route path="/VisaProcessingPersonal" element={<VisaProcessingPersonal />} />  
            <Route path="/VisaProcessingTravel" element={<VisaProcessingTravel />} />         
            <Route path="/" element={<TourGenerating />} />
            <Route path="/TourGenerating" element={<TourGenerating />} />
            <Route path="/VisaProcessingUpload" element={<VisaProcessingUpload />} />


            {/* Visa Processing Routes */}
             
            <Route path="/VisaProcessingPayment" element={<VisaProcessingPayment />} />  
            

            {/* Admin dashboard routes */}
            <Route path="/AdminDashboard" element={<FeatureCard />} />
            <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested visa" />} />
            <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected visa" />} />
            <Route path="/VisaApproved" element={<VisaApproveTable title="Approved visa"  />} />

            {/* login routes */}
            <Route path="/login" element={<Login/>} />

          </Routes>

          <Footer/>
          
        </div>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
