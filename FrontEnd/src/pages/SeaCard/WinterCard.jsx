import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function WinterCard() {
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/c7a3/87ed/abdb8ce5b7fce7f8009bf3ab4d38221e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=htUL5PyEm~sTRhzerKxJs9RnKEYJMhLdQHTE7zbHJTL4ooZyNk3jD0QQCWCNR~YJ75s-jah2Zv0dpkpN-VUp8xghqLc4o4uBaFPIJF05gzoZ2yImtZbhfMbv8p-M1x~w~LoPKoMrMZYcN4bgxVOTOa7zRjuoNaNFP6YDl-I0Y9FFuO9yD9ITV~XoQY4QcLoXEy7A54IQjJ~lWvvH3RGnajQ8Fed4kEPE7ReF92zNFAP09AqahxLLapGVxztc-NScDi~MxSeL3Yn6ZdWEE9Zk2rWyAGnIHq~opPbVexgeY8MRSotu-WaV1Syr9P8JVq06-VT8WDCedQSplij313MfuA__)',
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
        Winter Wonders
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
