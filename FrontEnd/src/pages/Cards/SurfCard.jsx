import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SurfCard() {
  const [likes, setLikes] = React.useState(15); // Initialize like count to 500
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/e06a/68bc/485aae2fb7f597c6e539ce3c25179f8d?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GFmP1dmxMfgcTVc1w-SWcSTtRa75AKCwJQEGlRd9WvayPUHbkGJA0ZVFmzDsr8rgPw9DJ9NR8pobg2QY225Mbyx~LcgpQlh91-~aGWEcFmMHJF90K97a3h3m-nXifXkzpOr3eLxnrhbO9zhmP8ZQsoyldffljjVCWJ3T9HsH54Ozed5iS4uCC-UkY~oKSNQ5U5ddb2s5MGEA5lZF6vguv-0MOhHZWaelMNTK4BX9ioG5dhWNwoiMfLuWR6WXVCnWqNo2S~a1K9oXlEG6hsSWqri92uxRLkqpm9kviNNbGfPwRoO0XPVEDoXy7AV9lNhUFMR1cfGiNgUCQwD29tacgg__)',
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
        Surfing
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
