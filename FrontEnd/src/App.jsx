import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/poppins'; 
import VisaProcessingHome from './pages/VisaProcessingHome';
import VisaProcessingPersonal from './pages/VisaProcessingPersonal';
import VisaProcessingTravel from './pages/VisaProcessingTravel';
import VisaProcessingUpload from './pages/VisaProcessingUpload.jsx';


import VisaProcessingPayment from './pages/VisaProcessingPayment';
import VisaProcessingPaymentSuccessful from './pages/VisaProcessingPaymentSuccessful';
import FeatureCard from './components/FeatureCard';
import VisaRequestedTable from './components/VisaRequestedTable';
import VisaRejectTable from './components/VisaRejectTable';
import VisaApproveTable from './components/VisaApproveTable';
import Login from './pages/Login';
import Home from './pages/Home';



import TourGenerating from './pages/TourGenerating';
import Footer from './components/Footer';
import Header from './components/Header';
import theme from './utils/Theme.jsx'; // Import custom theme

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


        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>

      {!isLoginPage && <Footer />} {/* Render footer if not on login page */}
    </div>
  );
}

export default App;
