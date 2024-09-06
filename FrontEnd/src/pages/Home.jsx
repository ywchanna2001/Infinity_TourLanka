import React from 'react';
import { Button, Card, CardMedia, CardContent, Typography, Grid, Container, InputBase, IconButton, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HomeIcon from '@mui/icons-material/Home';
import TourIcon from '@mui/icons-material/Tour';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SearchIcon from '@mui/icons-material/Search';
import image1 from '../assets/home_sigiriya.jpg';
import image2 from '../assets/LoginBG.jpg';
import image3 from '../assets/home_sigiriya.jpg';
import image4 from '../assets/LoginBG.jpg';

import FitbitIcon from '@mui/icons-material/Fitbit';

import v1 from '../assets/videos/v1.mp4';
import vv2 from '../assets/videos/vv2.mp4';
import vv4 from '../assets/videos/vv6.mp4';

const Home = () => {
  const popularDestinations = [
    { title: 'First Destination', image: image1 },
    { title: 'Second Destination', image: image2 },
    { title: 'Third Destination', image: image3 },
    { title: 'Fourth Destination', image: image4 },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="inset-0 flex flex-row items-center justify-center text-white bg-black h-[100vh]">
        {/* First Section with Video Background */}
        <div className="relative basis-1/3 h-[100vh]">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={vv2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Middle Section with Video Background and Content */}
        <div className="relative basis-1/3 h-[100vh] flex flex-col justify-center items-center gap-4 bg-black bg-opacity-50">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={v1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h1 className="text-7xl font-bold text-center mb-10">Discover Untold Journeys</h1>
            <Paper
              component="form"
              className="flex items-center p-1.5 rounded-full bg-white mb-4"
              style={{ width: '60%', borderRadius: '30px',backgroundColor:'#f5f5f5' }} // Adjust width as needed
            >
                <IconButton type="submit" aria-label="search">
                <SearchIcon />
                </IconButton>
            <InputBase
                placeholder="Find Your Next Escape..."
                inputProps={{ 'aria-label': 'search destinations' }}
                className="flex-grow px-2"
                style={{ color:'black' }}
            />
            </Paper>
            <Button className="h-[44px] w-[192px]" endIcon={<FitbitIcon/>} style={{ borderRadius: '30px',backgroundColor:"#0F6566",color:'#f5f5f5' }} >
              Generate a Tour
            </Button>
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional Overlay for better readability */}
        </div>

        {/* Third Section with Video Background */}
        <div className="relative basis-1/3 h-[100vh]">
          <video 
            autoPlay 
            loop 
            muted 
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={vv4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Icons Section */}
      <Container className="py-10">
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <LocationOnIcon fontSize="large" className="text-blue-600" />
            <Typography>Plan My Trip</Typography>
          </Grid>
          <Grid item>
            <DirectionsCarIcon fontSize="large" className="text-green-600" />
            <Typography>Book Vehicle</Typography>
          </Grid>
          <Grid item>
            <HomeIcon fontSize="large" className="text-red-600" />
            <Typography>Accommodation</Typography>
          </Grid>
          <Grid item>
            <TourIcon fontSize="large" className="text-purple-600" />
            <Typography>Tour Packages</Typography>
          </Grid>
          <Grid item>
            <LocalOfferIcon fontSize="large" className="text-yellow-600" />
            <Typography>Special Offers</Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Popular Destinations Section */}
      <Container className='p-10'>
        <Grid className='mb-5'>
          <Typography variant="h4" className="my-8 font-semibold text-center">
            Popular Destinations
          </Typography>
          <Typography className="my-8 text-sm font-semibold text-center">
            Some description about Visiting Popular destinations
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {popularDestinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={destination.image}
                  alt={`${destination.title}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" className='text-black'>
                    {destination.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Cultural Events Section */}
      <Container className='p-10'>
        <Grid className='mb-5'>
          <Typography variant="h4" className="my-8 font-semibold text-center">
            Cultural Events You Can't Miss
          </Typography>
          <Typography className="my-8 text-sm font-semibold text-center">
            Some description about Visiting Popular destinations
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {popularDestinations.map((destination, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={destination.image}
                  alt={`${destination.title}`}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" className='text-black'>
                    {destination.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
