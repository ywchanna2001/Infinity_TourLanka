import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SecCard() {
  const [likes, setLikes] = React.useState(578); // Initialize like count to 500
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/446b/c5c1/19b1278b7a97e41f262ff29a79255698?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A3bjoXqdbkIISAil8D6EOKMtbCe00gvnUia~Kk8EyhP9gFCQ9pgPkZZjCt~1dn6Rk0XZ5H3kdfE6~af6ZAiqnBdeS-ZSmVkCSdwWhE~lOj6HDtqJUTka-Hp62R126QjN6bM9ePQYQAAFkfZEJfziN4LhFEBGqMvhI08YZsD8r1DkdBm6UpXKWsZr9mloVLTlE~7LwSb-A6vxAMSR3YquzfDoaCydET6ZR320mOHR9aIgHMQK56J66QutPZba6pdJ~oqIxZfcm6rstdiqILPQKRcYB6bARi03m0B6GNXLyI5VndkX884WLMAijZUcgPiyVY9k-ihF-FddVL~3xceW3g__)',
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
        Scenic Less
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
