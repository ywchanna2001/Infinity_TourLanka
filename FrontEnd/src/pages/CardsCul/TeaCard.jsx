import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TeaCard() {
  const [likes, setLikes] = React.useState(48); // Initialize like count to 500
  const [shared, setShared] = React.useState(false); // Track if the button has been clicked

  // Function to handle the share button click
  const handleShareClick = () => {
    if (!shared) { // Only increment if not already shared
      setLikes(likes + 1); // Increment like count
      setShared(true); // Mark as shared
    }
  };

  return (
    <Card
    sx={{
      maxWidth: 450,
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/9626/7705/cef832c534963f1a6d9d6ce53ad44292?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZREex-83D4RkcvakAkVsnd8K~c3hiQxDTyZHMp9Q~yGOa~KpHIVe37GIyyTzEi9cXFevXzZKxJKVv0xMA1wpiaSNcXGrGlgP1VOSecGYIgsOA4ccBBfJagvNl9Jy8y7cT2CL03Me98Kc4ghwSOyDJ2VqvMwHwLNgJ9NtMHsBqLLbC44iC3KH4NK1-mYnJREZ3cK4cMMkTLas-OsWD7nz0iKbM9e6Cs6he4aouviAa4boM42qOjYVd4OwJ3nL-1JmzFouIO7Ru8qVP8K3WyVzHI2~FoxISriSmj3ag39SJyRo7BDzIFATAJeltjENEq3hSqczVS5V8QjRBqML6cekFA__)',
      backgroundSize: 'cover',  // Change to 'contain' to fit the image within the card
      backgroundPosition: '25',  // Adjust to 'top', 'bottom', or specific coordinates like '50% 50%'
      backgroundRepeat: 'no-repeat',
      height: 200,
      display: 'flex',
      flexDirection: 'column' 
      }}
    >
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px',
         
        }}
      >
        <Typography variant="h4" component="div" color="white" >
        Tea & Tradition
        </Typography>
        <Typography align='left' variant="h5" component="div" color="white">
           {likes}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '16px',
          display: 'flex',
          justifyContent: 'center', // Center button horizontally
        }}
      >
        {!shared && (
          <Button
            size="small"
            variant="contained"
            onClick={handleShareClick}
          >
            <FavoriteIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
