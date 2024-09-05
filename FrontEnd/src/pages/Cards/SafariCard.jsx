import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SafariCard() {
  const [likes, setLikes] = React.useState(45); // Initialize like count to 500
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/f684/e485/e76f70a1ed6964edb0565520a7e96a6e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IhJY2uSHFmrNSRutZdVM7HUrXDk6odPZTm2rtYZYbv~~Ly4gjrjl0Me1DxrKG0dNSU4ozTTXDGy6W4-3yhE3F6gSC5gPWyZjpROJgLnqDQDWG1BrztVbAy0AItuAUNOYMOCU4sxkuL-6cYvMMzDLXmQZUyti2UkNyVLlHttMB14QYBfwDNjOkMbXC5Xr2mbrqCN2k52p2Ei2glZ5T58j3u8yQJyN8KY1S1y6alzwU~UMmrGgnIAykvvOdwfnUsDZ9NCVmZiW-wk-FpHg15eFJmY56-W68-a-Bo36K3zMQ2G~5y-jGQpXI~GvweomfAlkYPaSE8tILD6MyeXbRRnIBg__)',
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
        Safari
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
