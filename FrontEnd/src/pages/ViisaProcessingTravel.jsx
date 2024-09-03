import React from 'react';
import { Box, Typography } from '@mui/material';
import TravelInfoForm from '../components/Forms/TravelInfoForm';

function VisaProcessingTravel() {
  return (
    <div style={{ backgroundImage: 'url(./assets/Images/VisaProcessing/Background.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <Box sx={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
        <Typography variant="h3" color="secondary" mb={4} textAlign="center">
          Sri Lanka EVisa
        </Typography>
        <TravelInfoForm />
      </Box>
    </div>
  );
}

export default VisaProcessingTravel;
