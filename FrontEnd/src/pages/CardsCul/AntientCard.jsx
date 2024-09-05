import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function AntientCard() {
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
      maxWidth: 450,
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/104b/a262/49ba13ccbb1817e2164fd042d0088eb3?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DHnTK02nkEF4eBjgG5S1VkvESpPUjbsNg2uGdFAArBNlF0zTaYeUyz-VXwWkiK~CQJz~CxchHfWignBLepEbdLOgubzaX6okaNH2kmuJoJQG9Unp04j~wXHiTi8LsLlSx3qMDyw~ZOIKY83cNh22-2ZLXdA2AQUQaU9HDKZnKAhBdgWkYX7QnyUZ-YTCi5ygx5~6fcgMZzk8DmmZOo9WyZeSXBan4HSIZWygBf34Mpr8RaVwHAq6QzxSWpTv9Wc1O0DrjRfe0XlBQ~9DOWmEHFKkd27qYL5haEbcMYjf4V1Ctwn7DUJmNA~tHyv4gFLkxznm96Vcp3R0HH5uxH1rMg__)',
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
        Antient Kingdoms
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
