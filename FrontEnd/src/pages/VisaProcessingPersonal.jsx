import React from 'react';
import { Box, Typography } from '@mui/material';
import VisaProcessingPersonalForm from '../components/Forms/VisaProcessingPersonalForm'; 
import BackgroundImage from '../assets/Images/VisaProcessing/FormBackground.jpg'; // Adjust the path as needed

import { useNavigate } from 'react-router-dom';

function VisaProcessingPersonal() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Box 
        sx={{ 
          padding: '2rem', 
          maxWidth: '800px',
          margin: 'auto',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Optional: Add a semi-transparent white background for better readability
          borderRadius: '10px'
        }}
      >
        <Typography variant="h3" color="primary" mb={4} textAlign="center">
          Sri Lanka EVisa
        </Typography>
        <VisaProcessingPersonalForm />
      </Box>
    </div>
  );
}

export default VisaProcessingPersonal;
