import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import TPBackgroundImage1 from '../assets/TPBackgroundImage1.png';

const TripPackageBanner = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${TPBackgroundImage1})` }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <Container maxWidth="lg" className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <Typography variant="h4" component="h1" className="font-bold mb-4">
          PLAN YOUR TRIP PACKAGE WITH AI
        </Typography>
        <Typography variant="body1" className="mb-6 max-w-2xl">
          Embark on a personalized adventure in Sri Lanka with the power of AI. Our intelligent system crafts tailor-made travel packages based on your unique preferences. Let's plan an unforgettable travel package.
        </Typography>
        <Button variant="contained" color="primary" className="bg-teal-600">
          Let's Plan Your Tour
        </Button>
      </Container>
    </div>
  );
};

export default TripPackageBanner;
