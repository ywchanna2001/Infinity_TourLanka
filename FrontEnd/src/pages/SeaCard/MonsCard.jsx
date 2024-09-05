import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function MonsCard() {
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/ac1e/b8de/b76b35256ebb36f7d657d7d137ce3922?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RuQs09-GAGCJzpL2w4TZw7cASN9IIWTpplTxfj7a4v4b9Ndi5t8nQdITYVKOQYsnQnVWW8dZ8iWdsnSrhYY1JbtHboMtO8-rLzZUXdc2cJZm7pIFYWzXSnGXGa5vSRtycN5hQxVYb01~1rKKOeFthMH3PsSptjkScqHZMHbdLddCSgjkHvseDg2DRXGwB8mh2gHQv-rP7nNG~18cPGEQAV99Ymw~LzTbD1p5S7pOZFeaErrL7F2HGyy98Ckb5JIdVwmbSlnChKEfbd85G1nAC4XApzS0cpdhF37HV~lxXtILfz75XcYVaxqbcoRg-KmXylxFd-qDXoLcpZCFi12LlA__)',
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
        Monsoon Magic
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
