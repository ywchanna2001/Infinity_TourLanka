import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function EssCard() {
  const [likes, setLikes] = React.useState(450); // Initialize like count to 500
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/a74e/1b70/08734a165dbcb2e07520c3f33b9aed4c?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KwEMc0A18raqWndbK-PElkNFF0u-tvZk4U6La4vc50CMXSXixWoJEhKZOVrq0t0V7IiDf0rrBWPunzH7ZucKgw5FDk-M-Yciws~nfYJrkGC67U5I6rq-jOdNoVnlHC98VMkhNjtWFkmnWdKSK94oyWcGVcWV9jEVHWzqvj6uMRwuMFlLVd0PclfmypztqlZf-akuYNCOcNA8qiIFexYdOzdI-YLHzJ664EUB0F3vn-e9DRZC6TBFRF5ofKZfQLoQ-llyQ~5bnjYOtyFci0rn1cArq~idGkfLk65eZ5etyf15Im3eu0hC-2AvHQ5hZ4iq9Y6CwUYDU6yIrdgHaeMA1A__)',
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
        Essence of Sri Lanka
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
