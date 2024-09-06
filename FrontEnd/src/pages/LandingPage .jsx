import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const LandingPage = () => {
  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <video autoPlay loop muted style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', zIndex: '-1' }}>
        <source src="/path-to-your-video.mp4" type="video/mp4" />
      </video>
      
      <Container sx={{ textAlign: 'center', color: '#fff', position: 'relative', zIndex: '1', top: '50%', transform: 'translateY(-50%)' }}>
        <Typography variant="h2">Sri Lanka Travel App</Typography>
        <Typography variant="h5" sx={{ my: 2 }}>Explore the beauty of Sri Lanka</Typography>
        
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mx: 2 }}>Home</Button>
          <Button variant="contained" color="secondary" sx={{ mx: 2 }}>Tours</Button>
          <Button variant="contained" color="success" sx={{ mx: 2 }}>Contact Us</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;