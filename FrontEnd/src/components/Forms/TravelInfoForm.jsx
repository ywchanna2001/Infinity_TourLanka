import React from 'react';
import { Box, TextField, Typography, Grid, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TravelInfoForm = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
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
              variant="outlined"
            >
              <MenuItem value="type1">Type 1</MenuItem>
              <MenuItem value="type2">Type 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Issuing country"
              fullWidth
              variant="outlined"
            >
              <MenuItem value="country1">Country 1</MenuItem>
              <MenuItem value="country2">Country 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Nationality"
              fullWidth
              variant="outlined"
            >
              <MenuItem value="nationality1">Nationality 1</MenuItem>
              <MenuItem value="nationality2">Nationality 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Passport number"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Place of issue"
              fullWidth
              variant="outlined"
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
              variant="outlined"
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
              variant="outlined"
            />
          </Grid>
        </Grid>

        {/* Nationality Acquisition */}
        <Box mt={4}>
          <FormControl component="fieldset">
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
              label="Visiting cities"
              fullWidth
              variant="outlined"
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
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Arrival city"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Departure city"
              fullWidth
              variant="outlined"
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
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Address"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Mobile number"
              fullWidth
              variant="outlined"
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
