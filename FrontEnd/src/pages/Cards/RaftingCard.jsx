import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function RaftingCard() {
  const [likes, setLikes] = React.useState(59); // Initialize like count to 500  
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
      backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/5753/e7cd/50c121a1697d50effe27b342abfa9afe?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ix12LcpkU2~RKK7Trs7TEflRsLG1eHGFwTjb~RFW0m4LFL23XLG1r9wh2X4Dh0kdD3XqK5XY64qUt31oUCNam7AdPhriJ~URlNsnSmW~dvqAOEBeew2SapTqPEkjDmWtLs3qN-21n8V77AbjG8Js1dmz-KmdeZKn9Z7R9GO4SGQsJ~s89hP91Ecd3~JIG7ybRz7baPRQKeHz5tD52UMdoHwFUV-HNahDUvNFTHSE7q3We3NlzZ4ZRRf99IEIP8VCExLdrzeak5Xf9iANIXCt-mco-d3JvUu8qTG4Yh9mA47c5hdbCl3L6SaMcj84iuYLNvABEy3f2Fh25nYVyh9CSA__)',
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
        Rafting
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
