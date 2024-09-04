import React from 'react';
import Slider from 'react-slick';
import { Button, Container, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import TPBackgroundImage1 from '../assets/TPBackgroundImage1.png';
import TPBackgroundImage2 from '../assets/TPBackgroundImage2.png';
import TPBackgroundImage3 from '../assets/TPBackgroundImage3.png';
import TPBackgroundImage4 from '../assets/TPBackgroundImage4.png';

const TripPackageBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="relative w-full h-[500px]">
    <Slider {...settings}>
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${TPBackgroundImage1})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <Container 
          maxWidth="lg" 
          className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white pb-10"
        >
          <Typography 
            variant="h4" 
            component="h1" 
            style={{ textAlign: 'right', alignSelf: 'flex-center', fontWeight: 'bold' }}
          >
            PLAN YOUR TRIP PACKAGE WITH AI
          </Typography>
          <Typography 
            variant="body1" 
            className="mb-6 max-w-2xl"
            style={{ textAlign: 'left', alignSelf: 'flex-end' }}
          >
            Embark on a personalized adventure in Sri Lanka with the power of AI. Our intelligent system crafts tailor-made travel packages based on your unique preferences. Let's plan an unforgettable travel package.
          </Typography>
          <Button 
            variant="contained" 
            style={{ backgroundColor: '#008080', 
              color: 'white',
              alignSelf: 'flex-end',
              borderRadius: '25px',}}
          >
            Let's Plan Your Tour
          </Button>
        </Container>
      </div>
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${TPBackgroundImage2})` }}>
        {/* Repeat content or change as needed */}
      </div>
      <div className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${TPBackgroundImage3})` }}>
        {/* Repeat content or change as needed */}
      </div>
    </Slider>
  </div>
  );
};

export default TripPackageBanner;
