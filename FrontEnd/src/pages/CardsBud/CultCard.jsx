import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function CultCard() {
  const [likes, setLikes] = React.useState(857); // Initialize like count to 500
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/956c/3402/8b8429dbc20d842e1aba6ac26901ea4f?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o1WBl4ioMpTbrlTiB2gBXsaRwkLGpr6pvrdZLQlsBxdMscdK6QwLr7d5B4NPsBk2BdCsMjeudu4~-CdVN53KhYGraLKImcWX5W7VYvyvI5WeSDuwgsG3vFgaZfZg945s3Xi9~mXl01iGBPVVHR6ptjZV2yQ1HHKqFKkzaOct3VT25A4mYnZPO~e04MNucMDEF9~IBnSHT5qk-oYV5gzPcOLmF3Y6vpsA72vFJY9o--M3-ekuN9tep7pmi1foJ5J-2lBiNsEajWMzwRE9Vp2v6zUXTKzaCr-STVdvRfC6M0-xV8asQUj5SocKSQ2cI7VGGUrsTcvJsnLavpuOs3YIpQ__)',
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
        Cultural Discoveries
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
