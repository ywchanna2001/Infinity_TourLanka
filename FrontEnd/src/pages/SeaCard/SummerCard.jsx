import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function SummerCard() {
  const [likes, setLikes] = React.useState(89); // Initialize like count to 500  
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/b1e6/af18/dadeb99a001c9c56ad378436e29dc35d?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eYyfVUq9UabZhxcpEZMLE5GwvCXu4OTMy7rhaWLxuesFhpbw6bHZLZx1ta~N4KVGeFJbbKIgtxLxHf4KmoM-qoBedJGnP8wAeregn2K2NqK1cLF2Ml4FJxXoQuKG-y~X3XkYv~Mye08FrjKEPt0jSl~kYdZUZ82moZ6NKYSO-3ysI7AKGr9dV~hYXiiO9owhRNw~B4Eg-qVEicSOqq-I8VHaqxea5dzamVzn10KzG966LUQ4MMCqp~KafH-EZm4a4Afgy~O47akAq4eXC6CPqZSxUVHQWSol1C~2ymW6CfAc2Hz5dOZ5cMC8iDmXPEFkHp~aEWWgdAASZbqSHH6yig__)',
      backgroundSize: 'cover',  // Change to 'contain' to fit the image within the card
      backgroundPosition: '95%',  // Adjust to 'top', 'bottom', or specific coordinates like '50% 50%'
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
        Summer Serenity
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
