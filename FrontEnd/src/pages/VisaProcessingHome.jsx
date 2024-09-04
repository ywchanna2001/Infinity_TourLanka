import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import bannerImage from '../assets/Images/VisaProcessing/Banner.jpg'
import FormFillingIcon from '../assets/Images/VisaProcessing/FormFillingIcon.png'
import LaptopIcon from '../assets/Images/VisaProcessing/LaptopIcon.png'
import Wallet from '../assets/Images/VisaProcessing/wallet.png'

import { useNavigate } from 'react-router-dom';


// import Navbar from '../Navbar';
// import Footer from ;

function VisaProcessing() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      minHeight: '100vh' 
    }}>
      

      <Box p={2} sx={{ margin: '0 9rem' }}>
        {/* Banner Section */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh',
            backgroundImage: `url(${bannerImage})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            textAlign: 'left',
            paddingLeft: '20px'
          }}
        >
          <Box sx={{ zIndex: 1 }}>
            <Typography variant="h3" fontWeight={1000} mb={2}>
              VISA PROCESSING
            </Typography>
            <Typography fontSize="15px" fontWeight={400} width="500px">
              Effortlessly apply for your Sri Lanka tourist visa with our streamlined process, ensuring a hassle-free experience for your tropical getaway.
            </Typography>
            <Box mt={4} display="flex" justifyContent="left" gap={2}>
              <Button variant="contained" color="primary" sx={{ borderRadius: '2rem' }} onClick={() => handleNavigate('/VisaProcessingPersonal')}>
                Apply Now
              </Button>
              <Button variant="outlined" sx={{ borderRadius: '2rem', color: '#ffffff', borderColor: '#ffffff' }} >
                How to apply
              </Button>
            </Box>
          </Box>
          {/* Dark overlay for better contrast */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 0
            }}
          />
        </Box>

        {/* How it works Section */}
        <Box mt={8} textAlign="center">
          <Typography variant="h4" fontWeight={700} mb={4} color='secondary' fontFamily={'Poppins'}>
            How it works
          </Typography>

          <Box display="flex" justifyContent="center" gap={4} marginTop="60px" alignItems="center">
            {/* Step 1: Apply */}
            <Box textAlign="center"
             display="flex" 
             flexDirection="column" 
             alignItems="center"             
            >
              <img src={LaptopIcon} alt="Apply Icon" style={{ width: '50px', height: '50px' }} /> {/* Replace with your icon */}
              <Typography variant="h6" fontWeight={600} mt={2} color='secondary'>
                Apply
              </Typography>
              <Typography variant="body2" color='secondary'>
                Start a new application with apply now
              </Typography>
            </Box>

            {/* Step 2: Fill out Information */}
            <Box textAlign="center"
            display="flex" 
            flexDirection="column" 
            alignItems="center" >
              <img src={FormFillingIcon} alt="Fill Information Icon" style={{ width: '50px', height: '50px' }} /> 
              <Typography variant="h6" fontWeight={600} mt={2} color='secondary'>
                Fill out Information
              </Typography>
              <Typography variant="body2" color='secondary'>
                Provide personal and travel information (Upload Passport and recent photo)
              </Typography>
            </Box>

            {/* Step 3: Pay Visa Fee */}
            <Box textAlign="center"
            display="flex" 
            flexDirection="column" 
            alignItems="center" >
              <img src= {Wallet} alt="Pay Visa Fee Icon" style={{ width: '50px', height: '50px' }} /> 
              <Typography variant="h6" fontWeight={600} mt={2} color='secondary'>
                Pay Visa Fee
              </Typography>
              <Typography variant="body2" color='secondary'>
                Complete payment with credit/debit card and submit application
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      
    </div>
  );
}

export default VisaProcessing;
