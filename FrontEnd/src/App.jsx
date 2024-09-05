import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import theme from './utils/Theme.jsx'; // Import custom theme

import VisaProcessingPayment from './pages/VisaProcessingPayment.jsx';
import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import VisaProcessingPersonal from './pages/VisaProcessingPersonal.jsx';
import VisaProcessingTravel from './pages/ViisaProcessingTravel.jsx'; // Fixed typo

import VisaApproveTable from './components/VisaApproveTable.jsx';
import VisaRejectTable from './components/VisaRejectTable.jsx';
import VisaRequestedTable from './components/VisaRequestedTable.jsx';

import TourGenerating from './pages/TourGenerating';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import FeatureCard from './components/FeatureCard.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap app with ThemeProvider */}
      <BrowserRouter> {/* BrowserRouter should wrap the entire routing structure */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />
            <Route path="/VisaProcessingPersonal" element={<VisaProcessingPersonal />} />
            <Route path="/VisaProcessingTravel" element={<VisaProcessingTravel />} />
            <Route path="/TourGenerating" element={<TourGenerating />} />
            <Route path="/VisaProcessingPayment" element={<VisaProcessingPayment />} />
            <Route path="/AdminDashboard" element={<FeatureCard />} />
            <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested visa" />} />
            <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected visa" />} />
            <Route path="/VisaApproved" element={<VisaApproveTable title="Approved visa" />} />
            <Route path="/Login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

// Layout component to conditionally render Header and Footer
function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/Login';

  return (
    <div className="App" style={{ backgroundColor: '#eceff1' }}>
      {!isLoginPage && <Header />} {/* Render header if not on login page */}
      
      <Routes>
        <Route path="/" element={<TourGenerating />} />
        <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />
        <Route path="/VisaProcessingPersonal" element={<VisaProcessingPersonal />} />
        <Route path="/VisaProcessingTravel" element={<VisaProcessingTravel />} />
        <Route path="/VisaProcessingPayment" element={<VisaProcessingPayment />} />
        <Route path="/AdminDashboard" element={<FeatureCard />} />
        <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested visa" />} />
        <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected visa" />} />
        <Route path="/VisaApproved" element={<VisaApproveTable title="Approved visa" />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>

      {!isLoginPage && <Footer />} {/* Render footer if not on login page */}
    </div>
  );
}

export default App;
