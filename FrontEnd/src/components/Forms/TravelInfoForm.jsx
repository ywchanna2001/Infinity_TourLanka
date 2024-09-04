import React, { useState } from 'react';
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

  // State for each input field
  const [formData, setFormData] = useState({
    passportType: '',
    issuingCountry: '',
    nationality: '',
    passportNumber: '',
    placeOfIssue: '',
    dateOfIssue: '',
    dateOfExpire: '',
    nationalityAcquisition: '',
    portOfEntry: '',
    portOfDeparture: '',
    visitingCities: '',
    expectedArrivalDate: '',
    expectedDepartureDate: '',
    emergencyContactName: '',
    emergencyAddress: '',
    emergencyMobileNumber: ''
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Print the form data to the console
    
    // Reset form data after submission
    setFormData({
      passportType: '',
      issuingCountry: '',
      nationality: '',
      passportNumber: '',
      placeOfIssue: '',
      dateOfIssue: '',
      dateOfExpire: '',
      nationalityAcquisition: '',
      portOfEntry: '',
      portOfDeparture: '',
      visitingCities: '',
      expectedArrivalDate: '',
      expectedDepartureDate: '',
      emergencyContactName: '',
      emergencyAddress: '',
      emergencyMobileNumber: ''
    });
  };

  return (
    <Box
    sx={{
      backgroundColor: "rgba(255, 255, 255, 0)",
      padding: "2rem",
      borderRadius: "10px",
      margin: "auto",
      maxWidth: "800px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Travel Information
      </Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
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
              name="passportType"
              value={formData.passportType}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="issuingCountry"
              value={formData.issuingCountry}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="passportNumber"
              value={formData.passportNumber}
              onChange={handleInputChange}
              focused
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Place of issue"
              fullWidth
              variant="filled"
              size="small"
              required
              name="placeOfIssue"
              value={formData.placeOfIssue}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="dateOfIssue"
              value={formData.dateOfIssue}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="dateOfExpire"
              value={formData.dateOfExpire}
              onChange={handleInputChange}
              focused
              color="primary"
            />
          </Grid>
        </Grid>

        {/* Nationality Acquisition */}
        <Box mt={4}>
  <FormControl component="fieldset" required>
    <FormLabel component="legend" sx={{ color: 'white' }}>
      How did you acquire nationality?
    </FormLabel>
    <RadioGroup
      row
      name="nationalityAcquisition"
      value={formData.nationalityAcquisition}
      onChange={handleInputChange}
    >
      <FormControlLabel
        value="birth"
        control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
        label="By birth"
      />
      <FormControlLabel
        value="naturalization"
        control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: 'white' } }} />}
        label="By naturalization"
      />
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
              name="portOfEntry"
              value={formData.portOfEntry}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="portOfDeparture"
              value={formData.portOfDeparture}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="visitingCities"
              value={formData.visitingCities}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="expectedArrivalDate"
              value={formData.expectedArrivalDate}
              onChange={handleInputChange}
              focused
              color="primary"
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
              name="expectedDepartureDate"
              value={formData.expectedDepartureDate}
              onChange={handleInputChange}
              focused
              color="primary"
            />
          </Grid>
        </Grid>

        {/* Emergency Contact Section */}
        <Typography variant="h6" mt={4} mb={2}>
          Emergency contact details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Name"
              fullWidth
              variant="filled"
              size="small"
              required
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleInputChange}
              focused
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Address"
              fullWidth
              variant="filled"
              size="small"
              required
              name="emergencyAddress"
              value={formData.emergencyAddress}
              onChange={handleInputChange}
              focused
              color="primary"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Mobile number"
              fullWidth
              variant="filled"
              size="small"
              required
              name="emergencyMobileNumber"
              value={formData.emergencyMobileNumber}
              onChange={handleInputChange}
              focused
              color="primary"
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button variant="contained" color="primary" onClick={() => handleNavigate('/VisaProcessingPersonal')}>
            Back
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save and Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TravelInfoForm;
