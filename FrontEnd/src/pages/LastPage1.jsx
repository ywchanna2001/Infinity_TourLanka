import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: '60vw', // 80% of viewport width for responsiveness
  height: '20vw', // 40% of viewport height for responsiveness
  padding: '2vw', // Padding responsive to viewport width
  backgroundImage: 'url("https://www.figma.com/file/AzfsSe4KnEuhaE9LWvyvct/image/539cefe4b73fa333571a5a5d8f4625bc6c8c3478")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '8px',
  position: 'relative',
}));

const OverlayContent = styled('div')({

  padding: '2vw', // Use vw for padding to scale with zoom
  borderRadius: '8px',
  position: 'absolute',
  top: '5%',
  left: '5%',
  right: '5%', // Keep margins relative for responsiveness
  bottom: '20%',
});

export default function LastPage1() {
  return (
    <Stack direction="row" justifyContent="center">
      <DemoPaper square={false}>
        <OverlayContent>
          <Typography
            variant="h3"
            component="div"
            style={{ fontSize: '4vw', fontWeight: 'bold' }} // Added fontWeight style
          >
            Custom Package 1
          </Typography>
          <Typography variant="body1" component="div" style={{ fontSize: '1.5vw' }}> {/* Font size responsive to viewport width */}
            Day 1-4: Relaxation & Beach Activities<br />
            Day 5-8: Cultural Experiences<br />
            Day 9-12: Nature Exploration<br />
            Day 13-16: Local Markets & Farewell<br />
            Day 17-20: Relaxation & Leaving
          </Typography>
        </OverlayContent>
        <Button
          variant="text"
          style={{
            alignSelf: 'flex-end',
            margin: '2vw',
            fontSize: '1.2vw',
            padding: '0.8vw 1.5vw',
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white
            color: '#fff', // Text color
            border: '1px solid rgba(255, 255, 255, 0.5)', // Optional: Add a border for better visibility
          }}>
          More Details
        </Button>

      </DemoPaper>
    </Stack>
  );
}
