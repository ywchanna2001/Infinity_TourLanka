import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Grid, Card, CardContent, CardMedia, Box, Divider } from '@mui/material';
import TPBackgroundImage1 from '../assets/TPBackgroundImage1.png';
import TPBackgroundImage2 from '../assets/TPBackgroundImage2.png';
import TPBackgroundImage3 from '../assets/TPBackgroundImage3.png';
import TPBackgroundImage4 from '../assets/TPBackgroundImage4.png';
import Adventure from '../assets/Images/TourGeneration/Adventure.png';
import Rafting from '../assets/Images/TourGeneration/Rafting.png';
import Safari from '../assets/Images/TourGeneration/Safari.png';
import Surfing from '../assets/Images/TourGeneration/Surfing.png';
import '@fontsource/poppins';

const GeneratedTours = () => {
  const slides = [
    { url: TPBackgroundImage1 },
    { url: TPBackgroundImage2 },
    { url: TPBackgroundImage3 },
    { url: TPBackgroundImage4 },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showForm, setShowForm] = useState(false); // State to toggle between form and banner

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handlePlanClick = () => {
    setShowForm(true); // Show the form when button is clicked
  };

  return (
    <>
      {/* Background Image Container */}
      <div
        className="relative w-full h-[950px] bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
      >
        <Container
          maxWidth="lg"
          className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white pb-10"
        >
          <Typography
            variant="h4"
            component="h1"
            style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 50 }}
          >
            Your AI Generated Plans Available Below
          </Typography>

          {/* Plan Your Trip Button */}
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ mt: 4 }} 
            onClick={handlePlanClick}
          >
            Plan Your Trip Now
          </Button>
        </Container>
      </div>

      {/* Trending Section */}
      <Container maxWidth="lg">
        <Typography variant="h5" component="h2" gutterBottom sx={{ fontSize: 50, fontWeight: 800, color: '#006666', marginTop: 10 }}>
          Trending
        </Typography>
        <Divider sx={{ marginTop: 2, borderColor: 'black', color: 'black' }}></Divider>

        {/* Adventure Packages */}
        <Section 
          title="Adventure Packages" 
          description="Explore Sri Lanka’s most thrilling adventures with our top-rated packages, loved by travelers for their blend of excitement and stunning scenery."
          images={[Adventure, Rafting, Safari, Surfing]}
        />

        {/* Cultural and Historical Packages */}
        <Section 
          title="Cultural and Historical Packages" 
          description="Immerse yourself in Sri Lanka’s rich cultural heritage with our top-rated packages, cherished by travelers for their deep connection to the island’s history and traditions."
          images={[Adventure, Rafting, Safari, Surfing]}
        />

        {/* Budget-Friendly Packages */}
        <Section 
          title="Budget-Friendly Packages" 
          description="Experience the magic of Sri Lanka with our Budget packages, designed for travelers seeking unforgettable adventures without overspending."
          images={[Adventure, Rafting, Safari, Surfing]}
        />

        {/* Seasonal Packages */}
        <Section 
          title="Seasonal Packages" 
          description="Explore Sri Lanka throughout the year with our Seasonal Escapes packages. Whether it’s vibrant summer beaches or serene winter retreats, enjoy Sri Lanka in every season."
          images={[Adventure, Rafting, Safari, Surfing]}
        />
      </Container>
    </>
  );
};

// Section Component
const Section = ({ title, description, images }) => {
  return (
    <div>
      <Box display="flex" justifyContent="center" textAlign="center">
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: 30, fontWeight: 800, color: '#006666' }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h6" component="h3" gutterBottom sx={{ fontSize: 20, fontWeight: 600, color: '#006666' }}>
        {description}
      </Typography>
      <Grid container spacing={2} justifyContent="center" padding={2}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, transition: "0.3s", '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia component="img" height="140" image={image} alt={title} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GeneratedTours;
