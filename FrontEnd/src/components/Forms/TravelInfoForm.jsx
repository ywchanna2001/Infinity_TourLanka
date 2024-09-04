import React from 'react';
import { Box, TextField, Typography, Grid, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TravelInfoForm = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", 
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", 
    // ... (remaining countries)
  ];

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '2rem',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Travel Information
      </Typography>

      <Box component="form" noValidate autoComplete="off">
        {/* Passport Details Section */}
        <Typography variant="h6" mt={4} mb={2}>
          Passport details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Passport type"
              fullWidth
              variant="filled"
              size="small"
              required
            >
              <MenuItem value="ordinary">Ordinary Passport</MenuItem>
              <MenuItem value="diplomatic">Diplomatic passport</MenuItem>
              <MenuItem value="official">Official passport</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Issuing country"
              fullWidth
              variant="filled"
              size="small"
              required
            >
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Nationality"
              fullWidth
              variant="filled"
              size="small"
              required
            >
              <MenuItem value="nationality1">Nationality 1</MenuItem>
              <MenuItem value="nationality2">Nationality 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Passport number"
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Place of issue"
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of issue"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of expire"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
        </Grid>

        {/* Nationality Acquisition */}
        <Box mt={4}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">How did you acquire nationality?</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="birth" control={<Radio />} label="By birth" />
              <FormControlLabel value="naturalization" control={<Radio />} label="By naturalization" />
            </RadioGroup>
          </FormControl>
        </Box>

        {/* eVisa Section */}
        <Typography variant="h6" mt={4} mb={2}>
          eVisa
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Port of entry in Sri Lanka"
              fullWidth
              variant="filled"
              size="small"
              required
            >
              <MenuItem value="Colombo">Colombo</MenuItem>
              <MenuItem value="Mattala">Mattala</MenuItem>
              <MenuItem value="Jaffna">Jaffna</MenuItem>
              <MenuItem value="Trincomalee">Trincomalee</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Port of departure from Sri Lanka"
              fullWidth
              variant="filled"
              size="small"
              required
            >
              <MenuItem value="Colombo">Colombo</MenuItem>
              <MenuItem value="Mattala">Mattala</MenuItem>
              <MenuItem value="Jaffna">Jaffna</MenuItem>
              <MenuItem value="Trincomalee">Trincomalee</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Visiting cities"
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expected date of arrival"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expected date of departure"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
        </Grid>

        {/* Emergency Contact Section */}
        <Typography variant="h6" mt={4} mb={2}>
          Emergency contact
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Contact name in Sri Lanka"
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Address"
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Mobile number"
              fullWidth
              variant="filled"
              size="small"
              required
            />
          </Grid>
        </Grid>
      </Box>
      {/* Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={() => handleNavigate('/VisaProcessingPersonal')}>Go Back</Button>
        <Button variant="contained" color="primary">Save and Continue</Button>
      </Box>
    </Box>
  );
};

export default TravelInfoForm;
