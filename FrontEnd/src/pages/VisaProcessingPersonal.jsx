import React from 'react';
import { Box, Typography } from '@mui/material';
import VisaProcessingPersonalForm from '../components/Forms/VisaProcessingPersonalForm'; 
import VisaProcessingBG from '../components/VisaProcessingBackground';

import { useNavigate } from 'react-router-dom';

function VisaProcessingPersonal() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <VisaProcessingBG>
    <div>
      
        <Typography variant="h3" color="primary" mb={4} textAlign="left">
          Sri Lanka EVisa
        </Typography>
        <VisaProcessingPersonalForm />
      
    </div>
    </VisaProcessingBG>
  );
}

export default VisaProcessingPersonal;
