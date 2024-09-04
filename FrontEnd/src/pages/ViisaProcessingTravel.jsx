import React from 'react';
import { Box, Typography } from '@mui/material';
import TravelInfoForm from '../components/Forms/TravelInfoForm';
import VisaProcessingBG from '../components/VisaProcessingBackground';


function VisaProcessingTravel() {
  return (
    <VisaProcessingBG>
    
      <Box sx={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
        <Typography variant="h3" color="primary" mb={4} textAlign="left">
          Sri Lanka EVisa
        </Typography>
        <TravelInfoForm />
      </Box>
    
    </VisaProcessingBG>
  );
}

export default VisaProcessingTravel;
