import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FestiFeverCard() {
  const [likes, setLikes] = React.useState(48); // Initialize like count to 500
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/ecdb/a91d/4856254c29b9c69958a2b366bdc9ebe8?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aS~Md1ywsJtHknf3-ZeslOJr42aE1yg6rALJQpUUZlmoR-Gr8hWcCmBEsa2bBIhUD56uDf6ZWvSLQyTUng881LifJbZ3SHuEkm-sT7K~A~FOehApRZ4YILwhfDgVSVi6Quz7zCmqJIoHYDLXgFB4rrqI3qYLl0pY27mp1LYCJ5aBjRAoDD-~l7MdOF8y3Dj00~-37u1h5l4eUnaIdv8yEDXR-eQCOAIOTWwbdBEHFnelAR~rIjKr0yMJb0yCV9v61eZFyTyrwOa-O949EQG5uwBq4eLh~YS~a~k1PwtgfLObPhWk28kuAeXEmZRDf~IMI62epYWIK5PggvNQdiOQEQ__)',
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
        Eestival Fever
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
