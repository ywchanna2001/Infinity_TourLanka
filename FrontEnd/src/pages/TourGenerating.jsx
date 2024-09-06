import React, { useState, useEffect } from 'react';
import { Button, Container, Typography, Grid, Card, CardContent, CardMedia, TextField, Box,Divider } from '@mui/material';
import TPBackgroundImage1 from '../assets/TPBackgroundImage1.png';
import TPBackgroundImage2 from '../assets/TPBackgroundImage2.png';
import TPBackgroundImage3 from '../assets/TPBackgroundImage3.png';
import TPBackgroundImage4 from '../assets/TPBackgroundImage4.png';
import Adventure from '../assets/Images/TourGeneration/Adventure.png';
import Rafting from '../assets/Images/TourGeneration/Rafting.png';
import Safari from '../assets/Images/TourGeneration/Safari.png';
import Surfing from '../assets/Images/TourGeneration/Surfing.png';
import '@fontsource/poppins';

const TripPackageBanner = () => {
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
          {!showForm ? (
            <>
              <Typography
                variant="h4"
                component="h1"
                style={{ textAlign: 'right', alignSelf: 'flex-center', fontWeight: 'bold',fontSize:50 }}
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
                style={{ backgroundColor: '#008080', color: 'white', alignSelf: 'flex-end', borderRadius: '25px' }}
                onClick={handlePlanClick} // Trigger form display
              >
                Let's Plan Your Tour
              </Button>
            </>
          ) : (
            <Container
  maxWidth="md"
  className="absolute top-15 left-0 right-0 bottom-15 bg-white/70 flex items-center justify-center backdrop-blur-md"
  style={{
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  }}
>
  <Box
    component="form"
    noValidate
    autoComplete="off"
    display="flex"
    flexDirection="column"
    gap="16px"
    width="100%"
  >
    <Typography variant="h5" component="h2" gutterBottom style={{ fontWeight: 'bold', textAlign: 'center' ,color : 'black'}}>
      Let's Fill
    </Typography>
    {/* First Row */}
    <Divider
      textAlign="left"
      sx={{ 
         borderColor: 'black', 
         color: 'black' 
        }}
    >Travel Datails</Divider>
    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
      <Grid item xs={4}>
        <TextField label="Select Your Occupation" variant="outlined"  small required />
      </Grid>
      <Grid item xs={4}>
        <TextField label="Your Age" type="number" variant="outlined"  small required />
      </Grid>
    </Grid>

    {/* Second Row */}
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={4}>
        <TextField label="You're From" variant="outlined"  small required />
      </Grid>
    </Grid>

    {/* Third Row */}
    <Divider
      textAlign="left"
      sx={{ 
         borderColor: 'black', 
         color: 'black' 
        }}
    >Travel Dates</Divider>
    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
      <Grid item xs={4}>
        <TextField label="Start Date" type="date" InputLabelProps={{ shrink: true,sx: { color: 'black' } }} variant="outlined"  small required />
      </Grid>
      <Grid item xs={4}>
        <TextField label="End Date" type="date" InputLabelProps={{ shrink: true,sx: { color: 'black' } }} variant="outlined"  small required />
      </Grid>
    </Grid>
    <Grid container spacing={2}justifyContent="space-between" alignItems="center">
    <Grid item xs={4}>
        <TextField label="Preferred Destinations" variant="outlined"  small required />
      </Grid>
      <Grid item xs={4}>
        <TextField label="Travel Type" variant="outlined" small required />
      </Grid>
    </Grid>
    {/* Fourth Row */}
    <Divider
      textAlign="left"
      sx={{ 
         borderColor: 'black', 
         color: 'black' 
        }}
    >Preferences</Divider>
    <Grid container spacing={2}justifyContent="space-between" alignItems="center">
      <Grid item xs={4}>
        <TextField label="Accommodation Type" variant="outlined" small required  />
      </Grid>
      <Grid item xs={4}>
        <TextField label="Transportation" variant="outlined" small required />
      </Grid>
    </Grid>
    
    {/* Fifth Row */}
    <Grid container spacing={2}justifyContent="space-between" alignItems="center">
      <Grid item xs={4}>
        <TextField label="Activities" variant="outlined" small required />
      </Grid>
      <Grid item xs={4}>
        <TextField label="Dietary Preferences" variant="outlined" small required />
      </Grid>
    </Grid>

    {/* Sixth Row */}
    <Divider
      textAlign="left"
      sx={{ 
         borderColor: 'black', 
         color: 'black' 
        }}
    >Addtional Comments</Divider>
    <TextField label="Type Here" variant="outlined" small multiline rows={3} />

    {/* Submit Button */}
    <Button
      variant="contained"
      style={{
        backgroundColor: '#008080',
        color: 'white',
        borderRadius: '25px',
        width: '150px',
        margin: '0 auto',
      }}
    >
      Let's Plan
    </Button>
  </Box>
</Container>

          )}
        </Container>
      </div>

      {/* Trending Section */}
      <Container maxWidth="lg">
        <div>
        
        <Typography variant="h5" component="h2" gutterBottom sx={{fontSize:50,fontWeight: 800,color: '#006666',marginTop:10 }}>
          Trending
        </Typography>
        <Divider
      
      sx={{ 
        marginTop: 2,
         borderColor: 'black', 
         color: 'black' 
        }}
    ></Divider>
        <Box display="flex" justifyContent="center" textAlign="center">
  <Typography variant="h6" component="h3" gutterBottom sx={{fontSize:30,fontWeight: 800,color: '#006666' }}>
    Adventure Packages
  </Typography>
</Box>
<Typography variant="h6" component="h3" gutterBottom sx={{fontSize:20,fontWeight: 600,color: '#006666' }}>
Explore Sri Lanka’s most thrilling adventures with our top-rated packages, 
loved by travelers for their blend of excitement and stunning scenery. 
From mountain treks to underwater exploration,these tried-and-true experiences
promise unforgettable moments for every adventurer. 
  </Typography>
        <Grid container spacing={2} justifyContent="center" padding={2}>
        <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Adventure} alt="Adventure" />
            
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Rafting} alt="Rafting" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Safari} alt="Safari" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Surfing} alt="Surfing" />
          </Card>
        </Grid>
        </div>
        <div>
        <Box display="flex" justifyContent="center" textAlign="center">
  <Typography variant="h6" component="h3" gutterBottom sx={{fontSize:30,fontWeight: 800,color: '#006666' }}>
  Cultural and Historical Packages
  </Typography>
</Box>
<Typography variant="h6" component="h3" gutterBottom sx={{fontSize:20,fontWeight: 600,color: '#006666' }}>
Immerse yourself in Sri Lanka’s rich cultural heritage with our top-rated packages, cherished by travelers
 for their deep connection to the island’s history and traditions. From ancient temples to vibrant festivals,
these thoughtfully curated experiences offer a journey through the heart of Sri Lanka’s diverse and 
captivating culture.
  </Typography>
        <Grid container spacing={2} justifyContent="center" padding={2}>
        <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Adventure} alt="Adventure" />
            
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Rafting} alt="Rafting" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Safari} alt="Safari" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Surfing} alt="Surfing" />
          </Card>
        </Grid>
        </div>
        
        <div>
        <Box display="flex" justifyContent="center" textAlign="center">
  <Typography variant="h6" component="h3" gutterBottom sx={{fontSize:30,fontWeight: 800,color: '#006666' }}>
  Budget-Friendly Packages
  </Typography>
</Box>
<Typography variant="h6" component="h3" gutterBottom sx={{fontSize:20,fontWeight: 600,color: '#006666' }}>
Experience the magic of Sri Lanka with our Budget packages, designed for travelers seeking unforgettable adventures
 without overspending. This value-packed option offers a perfect blend of cultural highlights, scenic beauty, and 
 local experiences, all while keeping your wallet happy. Enjoy a thoughtfully curated journey that ensures you make 
 the most of your trip, all at a fraction of the cost.
  </Typography>
        <Grid container spacing={2} justifyContent="center" padding={2}>
        <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Adventure} alt="Adventure" />
            
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Rafting} alt="Rafting" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Safari} alt="Safari" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Surfing} alt="Surfing" />
          </Card>
        </Grid>
        </div>

        <div>
        <Box display="flex" justifyContent="center" textAlign="center">
  <Typography variant="h6" component="h3" gutterBottom sx={{fontSize:30,fontWeight: 800,color: '#006666' }}>
  Seasonal Packages
  </Typography>
</Box>
<Typography variant="h6" component="h3" gutterBottom sx={{fontSize:20,fontWeight: 600,color: '#006666' }}>
Explore Sri Lanka throughout the year with our Seasonal Escapes packages. Whether it’s the vibrant summer 
beaches, serene winter retreats, or the enchanting monsoon rains, each package offers a unique experience 
tailored to the season, ensuring you enjoy the island’s beauty in every weather.
  </Typography>
        <Grid container spacing={2} justifyContent="center" padding={2}>
        <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Adventure} alt="Adventure" />
            
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Rafting} alt="Rafting" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Safari} alt="Safari" />
          </Card>
          <Card sx={{ padding: 0, margin: 0 }}>
            <CardMedia component="img" height="140" image={Surfing} alt="Surfing" />
          </Card>
        </Grid>
        </div>
      </Container>
    </>
  );
};

export default TripPackageBanner;
