import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins'; // Import Poppins font

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff', // Primary color
    },
    secondary: {
      main: '#000000', // Secondary color, black
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#000000', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the default font
  },
  custom: {
    customColor: '#FF5733', // Custom color (not part of palette)
  },
});

export default theme;
