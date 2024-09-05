import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function EcoCard() {
  const [likes, setLikes] = React.useState(59); // Initialize like count to 500  
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/c228/b16e/fe7ab66fb63a320d560937eb890cb34d?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bl1TDD4RmEPupSk8-yoNOtSEsx1Jy4k4oIyGN6RJRas01fnMhGn5FcR1YwJUF6c6l8FRYs4CmJVNrpReowpLRqAHIgKrsJ7r-HDlcNo5v9RggFs0hNYr4xC5RUoD7Rx7C5hDSy8r7bS4qqSi4WkeWvbU4CVSxgZBT~HH-znb4v8v~Z5TvbeYVZ~lVEzxslGfJtRKDJuvtkqvnjXx~aKtgr9iDrnltFZVgQRT4WELkihOvmqDEARSeJoHCTq-hGetQis9RYIAVA2qky69YR5MF8MP5A-RnZr19dy3MVFjYB-R80b4KRtrtU-HPZHpCxj6XaIgOu8RKrSEa8h7GV5RNA__)',
      backgroundSize: 'cover',  // Change to 'contain' to fit the image within the card
      backgroundPosition: '95%',  // Adjust to 'top', 'bottom', or specific coordinates like '50% 50%'
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
        Economy Escape
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
