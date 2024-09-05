import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FestiCard() {
  const [likes, setLikes] = React.useState(89); // Initialize like count to 500  
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/93e3/d4f3/67de3577262cba0fe6ccae72bc634495?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kNuiDf-bVG8wGlIL5b-IJE9Pf7dS3X4JjBVkcFttDBL-ztzNrSOj4RBzHAiGlRXvlvSAPsU7GJgcX7ZBedIYeH28kYXgwIRs86WaI7MgSsqoBTUXCXL8CoJqGnNnviBzoO1QTLTtWzcSm64pq1gLeI2IimiVRCp64zDjxkdB-Irqr70FiQwSOnywOUUK1EaCE~pgB~wW1DwYC0y2UaOazCutmEjw~9P-q8n-QfqajKWV3BQj1KouU~MJyOIE0o6LKHP2ncET42mXlNrAyLdAd02mR1C9kAz-JT8pAoqUc85SO8Fqsot3ikfXk3gEFXZuXzMwBiKwoEJFOGR5M0O~RA__)',
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
        Festivals & Celebrations
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
