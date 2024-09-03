import React from 'react';
import { Box, Typography } from '@mui/material';
import VisaProcessingPersonalForm from '../components/Forms/VisaProcessingPersonalForm'; 

import { useNavigate } from 'react-router-dom';

function VisaProcessingPersonal() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div style={{ backgroundImage: 'url(./assets/Images/VisaProcessing/Background.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Box sx={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
        <Typography variant="h3" color="primary" mb={4} textAlign="center">
          Sri Lanka EVisa
        </Typography>
        <VisaProcessingPersonalForm />
      </Box>
    </div>
  );
}

export default VisaProcessingPersonal;
