import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

// Replace with actual paths to your images or URLs
import visa from '../assets/visa.png';
import transpotation from '../assets/transpotation.png';
import safety from '../assets/safety.png';
import packages from '../assets/packages.png';
import accommodation from '../assets/accommodation.png';
import augmented from '../assets/augmented.png';
import background2 from '../assets/background2.jpg';

function FeatureCard() {
  const navigate = useNavigate(); // Hook for navigation

  // Updated dummy data for the cards with different images
  const cardData = [
    { title: 'Transportation Section', image: transpotation },
    { title: 'Visa Approve Section', image: visa },
    { title: 'Tour Packages Section', image: packages },
    { title: 'Accommodation Section', image: accommodation },
    { title: 'Safety Features Section', image: safety },
    { title: 'Augmented Reality Visualizations Section', image: augmented }
  ];

  // Function to handle button clicks
  const handleButtonClick = (title) => {
    if (title === 'Visa Approve Section') {
      navigate('/VisaRequested'); // Navigate to /VisaRequested route
    } else {
      console.log(`Button clicked for ${title}`);
      // You can add more logic here for other sections
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '40px 20px',
        position: 'relative',
      }}
    >
      {/* Centered heading inside the background image */}
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }}
      >
        Admin Dashboard
      </Typography>

      {/* Card grid container */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: 4, marginTop: '80px' }} // Adds margin to separate cards from the heading
      >
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 400, height: 200, margin: 'auto', marginTop: 1, marginBottom: 1, opacity: 0.8 }}> {/* Set width and height for landscape orientation */}
              <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}> {/* Flex layout for content and media */}
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: '100%' }} // Adjust width for landscape and maintain height
                  image={card.image} // Use specific image from cardData
                  alt={card.title}
                />
                <CardContent sx={{ flex: 1 }}> {/* Make content fill remaining space */}
                  <Typography gutterBottom variant="h6" component="div" color='black'> {/* Adjust font size variant */}
                    {card.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: 'center' }}> {/* Center the button */}
                <Button 
                  size="small" 
                  sx={{ backgroundColor: '#0F6466', color: 'white' }} 
                  onClick={() => handleButtonClick(card.title)} // Added onClick event
                >
                  Go
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FeatureCard;
