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
  backgroundImage: 'url("https://s3-alpha-sig.figma.com/img/9702/71f7/01518f9f55ab8a6c1bbf6a5cd8acf262?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFRUWLvlRhdGNWUZHsrwTQ9Xv-VmxKYotKPcI4GW6liGZYB3y8F1sXonoc3GKjJKzDITg5xVrmTKWzs1b4qwq~Ks1wmTfAQ6oZaJUtqWxPqvWjNXIskywailV3vgzQKeHYWMNH65MpBuke7nVRRKrLGptGLkuxI1vi1cnQMqmk6LPdcwpcbMlT6eFnDIihmRo0OejO1Sl8ua6reJNnvWn4f3tqbR5inOOIGOhqavWTVE~IQ6ry14E961W78lXnxA7bCL5RyU4i4V70jmNZYuKf6bG1KJO-Kpmwzb6Pd75Q5BBIUm1NPKruAyPlC5Pq5kP4gEO-ljz7b4jToC0g8EjA__")',
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

export default function LastPage2() {
  return (
    <Stack direction="row" justifyContent="center">
      <DemoPaper square={false}>
        <OverlayContent>
          <Typography
            variant="h3"
            component="div"
            style={{ fontSize: '4vw', fontWeight: 'bold' }} // Added fontWeight style
          >
            Custom Package 4
          </Typography>

          <Typography variant="body1" component="div" style={{ fontSize: '1.5vw' }}> {/* Font size responsive to viewport width */}
            Day 1-5: Relaxation & Beach Activities<br />
            Day 6-10: Cultural Experiences<br />
            Day 11-17: Nature Exploration<br />
            Day 18: Local Markets & Farewell<br />
            Day 19-20: Relaxation & Leaving
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
