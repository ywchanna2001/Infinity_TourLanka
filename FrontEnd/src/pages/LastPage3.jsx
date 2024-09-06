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
  backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/05e7/9c99/ae2ede30b258a436fb0b0f5b3ac81240?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lEULlqzzbH746pNaODP8gJ3mp1qLunP7LqjtlL7OXyMwydsNFtKL2Ex-lWqxTAlW4Vhv-Utc~mKttNsDaItL1qsa10UdKmXWPDYnT5WZC3YPahjMB1GCZMRXkPhGOu9pyIYRI14lHKX2NZC2JL15fj9A0~WIGbunK68tfMEDYtpSrMfwmOYIPOzG8KuN2Q-eB2E5uKsnosyeK6POitlwW-spPJ5xeE08punVSM8zOaYwvQ9lSxS3TnLpZqps8aq1fEqY9VHTqcr4BGz2RipB3s5SCIZjCMS9L7OrCFOiBaK9CTEpxOr6HNmzvJvFVTnR1EI7gypZC9NDByiuaPa6FQ__")',
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

export default function LastPage3() {
  return (
    <Stack direction="row" justifyContent="center">
      <DemoPaper square={false}>
        <OverlayContent>
          <Typography
            variant="h3"
            component="div"
            style={{ fontSize: '4vw', fontWeight: 'bold' }} // Added fontWeight style
          >
            Custom Package 3
          </Typography>
          <Typography variant="body1" component="div" style={{ fontSize: '1.5vw' }}> {/* Font size responsive to viewport width */}
            Day 1-5: Relaxation & Beach Activities<br />
            Day 6-10: Cultural Experiences<br />
            Day 11-17: Nature Exploration<br />
            Day 18: Local Markets & Farewell<br />
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
More Details        </Button>

      </DemoPaper>
    </Stack>
  );
}
