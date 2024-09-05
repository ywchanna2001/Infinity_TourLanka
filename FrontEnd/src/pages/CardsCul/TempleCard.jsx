import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TempleCard() {
  const [likes, setLikes] = React.useState(650); // Initialize like count to 500
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/e085/f29b/43b9ec136c89d83504ef3a5039f1346c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bCo4gZcMVU0JNGNL1qIiwyuhD1ADXHoVDSum~~VdFpccRGL18rREEj7uJ~pVkQLcsjPQdO48a7g1dfQX2WxwcV8b7dJWsyQBO1gR8ynh8vItNqT8RKW02jMXVSdNd-Yxzh2QRhbLKCCRuUeDqsuKv6QPnm-53tlPQ7eLNgZd4OBVyVQtG2B1BtC2lN73C765tzEVxyoS7CKBNRJFFTTQl1MLuztLQbDpfEi2keV7rAFrn5sGd8u9FPk0fEn71YJc3newALPwCQ6i4sY8WEO5KLxvZ0fl0cNDIreZS52wBOw8YnkIxqLVkaY5xCNDMkrBKAtCC2duBNuombCQ0rDGnw__)',
      backgroundSize: 'cover',  // Change to 'contain' to fit the image within the card
      backgroundPosition: '10%',  // Adjust to 'top', 'bottom', or specific coordinates like '50% 50%'
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
        Temple Trails
        </Typography>
                <Typography variant="h5" component="div" color="white" align='left'>
           {likes} 
        </Typography>
        <CardActions
        sx={{
          position: 'absolute',
          bottom: 10,
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
      </CardContent>
      
    </Card>
  );
}
