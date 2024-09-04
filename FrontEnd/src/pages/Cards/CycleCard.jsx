import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CycleCard() {
  const [likes, setLikes] = React.useState(50); // Initialize like count to 500
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
      maxWidth: 300,
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/0559/2840/cc468d7de57f7546bff53d4318f8e80e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EE~VaIZ3-6YJ-V0ptmoh81V4B9dzA0kUuTvQCTgDVZ87k~VPIRn00UXdMdqQP-n8g9VQAEhMnMHvaTkkqghe3mKijgPTKyf8W0MXa0yC3BxNNhxzI2yIp4TojryMYjjsh5hainWWa3rfy7NuHdbwL-bIo4jsjBLm9f-FvB99QwERpiCIFqXwhdgMk~pZ6vhglYoWMItdYpyv-~HqR5KdGP5VExA7fNS4ecV7A3zALw1WcFevbNn95g5LG3409MMdGpXP1B9bJOAz1AyubSyl83SyDyvfkQrLPnDUW6X7ByoI2fSMzsaSPxZUzp-jLxx9W8doseQDpD5nJNv7HPcl8w__)',
      backgroundSize: 'cover',  // Change to 'contain' to fit the image within the card
      backgroundPosition: '25',  // Adjust to 'top', 'bottom', or specific coordinates like '50% 50%'
      backgroundRepeat: 'no-repeat',
      height: 300,
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
        Cycling
        </Typography>
        <Typography variant="h5" component="div" color="white">
           {likes} Likes
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
          justifyContent: 'right', // Center button horizontally
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
