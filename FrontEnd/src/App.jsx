import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import theme from './utils/Theme.jsx'; 

import VisaProcessingPayment from './pages/VisaProcessingPayment.jsx';
import VisaProcessingHome from './pages/VisaProcessingHome.jsx';
import VisaProcessingPersonal from './pages/VisaProcessingPersonal.jsx';
import VisaProcessingTravel from './pages/ViisaProcessingTravel.jsx';
import VisaProcessingUpload from './pages/VisaProcesssingUpload.jsx';


import VisaApproveTable from './components/VisaApproveTable.jsx';
import VisaRejectTable from './components/VisaRejectTable.jsx';
import VisaRequestedTable from './components/VisaRequestedTable.jsx';

import TourGenerating from './pages/TourGenerating';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import FeatureCard from './components/FeatureCard.jsx';
import Login from './components/Login.jsx';
import Home from './pages/Home.jsx';
import VisaProcessingPaymentSuccessful from './pages/VisaProcessingPaymentSuccessful.jsx';

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap app with ThemeProvider */}
      <BrowserRouter> {/* BrowserRouter should wrap the entire routing structure */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Visa Processing Routes */}
            <Route path="/VisaProcessingHome" element={<VisaProcessingHome />} />
            <Route path="/VisaProcessingPersonal" element={<VisaProcessingPersonal />} />
            <Route path="/VisaProcessingTravel" element={<VisaProcessingTravel />} />
            <Route path="/VisaProcessingUpload" element={<VisaProcessingUpload />} />
            <Route path="/VisaProcessingPayment" element={<VisaProcessingPayment />} />

            <Route path="/TourGenerating" element={<TourGenerating />} />

            <Route path="/VisaProcessingUpload" element={<VisaProcessingUpload />} />


            {/* Visa Processing Routes */}
             
            <Route path="/VisaProcessingPayment" element={<VisaProcessingPayment />} />  
            <Route path="/VisaProcessingPaymentSuccessful" element={<VisaProcessingPaymentSuccessful />} /> 
            

            {/* Admin dashboard routes */}
            <Route path="/AdminDashboard" element={<FeatureCard />} />
            <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested visa" />} />
            <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected visa" />} />
            <Route path="/VisaApproved" element={<VisaApproveTable title="Approved visa" />} />
            <Route path="/Login" element={<Login />} />

            <Route path="/Home" element={<Home />} />

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
        <Route path="/VisaProcessingPaymentSuccessful" element={<VisaProcessingPaymentSuccessful />} />
        <Route path="/AdminDashboard" element={<FeatureCard />} />
        <Route path="/VisaRequested" element={<VisaRequestedTable title="Requested visa" />} />
        <Route path="/VisaRejected" element={<VisaRejectTable title="Rejected visa" />} />
        <Route path="/VisaApproved" element={<VisaApproveTable title="Approved visa" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/VisaProcessingUpload" element={<VisaProcessingUpload />} />
        <Route path="/TourGenerating" element={<TourGenerating />} />


        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>

      {!isLoginPage && <Footer />} {/* Render footer if not on login page */}
    </div>
  );
}

export default App;
