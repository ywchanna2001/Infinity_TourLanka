import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function VisaProcessingForm() {
  const navigate = useNavigate();

  // State to manage form inputs
  const [formData, setFormData] = useState({
    prefix: 'Mr',
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    religion: '',
    gender: 'Male',
    maritalStatus: 'Single',
    countryOfBirth: '',
    cityOfBirth: '',
    presentAddress: '',
    countryOfResidence: '',
    postalCode: '',
    mobileNumber: '',
    email: '',
    educationLevel: '',
    fieldOfStudy: '',
    occupation: '',
    companyName: '',
    companyAddress: '',
    fathersName: '',
    fathersCountryOfBirth: '',
    fathersNationality: '',
    mothersName: '',
    mothersCountryOfBirth: '',
    mothersNationality: ''
  });

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log(formData);
    navigate('/VisaProcessingTravel');
  };

  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0)',
        padding: '2rem', 
        borderRadius: '10px',
        margin: 'auto',
        maxWidth: '800px',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Typography variant="h6" fontWeight="bold" color="black" mb={2}>
        Personal Information
      </Typography>

      <Grid container spacing={2}>
        {/* Row 1: Prefix, Name */}
        <Grid item xs={12} sm={2}>
          <FormControl fullWidth variant="filled" required size='small'>
            <InputLabel>Prefix</InputLabel>
            <Select
              name="prefix"
              value={formData.prefix}
              onChange={handleChange}
              size='small'
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Ms">Ms</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="First Name" 
            variant="filled" 
            fullWidth 
            required 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="Middle Name" 
            variant="filled" 
            fullWidth 
            required 
            name="middleName" 
            value={formData.middleName} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField 
            label="Last Name" 
            variant="filled" 
            fullWidth 
            required 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>

        {/* Row 2: Date of Birth, Religion, and Gender */}
        <Grid item xs={12} sm={4}>
          <TextField 
            label="Date of Birth" 
            type="date" 
            variant="filled" 
            fullWidth 
            InputLabelProps={{ shrink: true }} 
            required 
            name="dateOfBirth" 
            value={formData.dateOfBirth} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField 
            label="Religion" 
            variant="filled" 
            fullWidth 
            required 
            name="religion" 
            value={formData.religion} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth required variant="filled" size='small'>
            <InputLabel>Gender</InputLabel>
            <Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              size='small'
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Row 3: Marital Status */}
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth required variant="filled" size='small'>
            <InputLabel>Marital Status</InputLabel>
            <Select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              size='small'
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Divorced">Divorced</MenuItem>
              <MenuItem value="Widowed">Widowed</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Row 4: Birth Information */}
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Country of Birth" 
            variant="filled" 
            fullWidth 
            required 
            name="countryOfBirth" 
            value={formData.countryOfBirth} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="City of Birth" 
            variant="filled" 
            fullWidth 
            required 
            name="cityOfBirth" 
            value={formData.cityOfBirth} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>

        {/* Row 5: Address and Contact */}
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Present Address (House No/Street)" 
            variant="filled" 
            fullWidth 
            required 
            name="presentAddress" 
            value={formData.presentAddress} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="Country of Residence" 
            variant="filled" 
            fullWidth 
            required 
            name="countryOfResidence" 
            value={formData.countryOfResidence} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="Postal/Zip Code" 
            variant="filled" 
            fullWidth 
            required 
            name="postalCode" 
            value={formData.postalCode} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Mobile Number" 
            variant="filled" 
            fullWidth 
            required 
            name="mobileNumber" 
            value={formData.mobileNumber} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Email" 
            variant="filled" 
            fullWidth 
            type="email" 
            required 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>

        {/* Education and Occupation */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" color="black" mt={4} mb={2}>
            Education and Occupation
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Highest Level of Education" 
            variant="filled" 
            fullWidth 
            required 
            name="educationLevel" 
            value={formData.educationLevel} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Field of Study" 
            variant="filled" 
            fullWidth 
            required 
            name="fieldOfStudy" 
            value={formData.fieldOfStudy} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Present Occupation" 
            variant="filled" 
            fullWidth 
            required 
            name="occupation" 
            value={formData.occupation} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Company Name" 
            variant="filled" 
            fullWidth 
            required 
            name="companyName" 
            value={formData.companyName} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField 
            label="Company Address" 
            variant="filled" 
            fullWidth 
            required 
            name="companyAddress" 
            value={formData.companyAddress} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>

        {/* Family Information */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" color="black" mt={4} mb={2}>
            Family Information
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Father's Name" 
            variant="filled" 
            fullWidth 
            required 
            name="fathersName" 
            value={formData.fathersName} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="Father's Country of Birth" 
            variant="filled" 
            fullWidth 
            required 
            name="fathersCountryOfBirth" 
            value={formData.fathersCountryOfBirth} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="Father's Nationality" 
            variant="filled" 
            fullWidth 
            required 
            name="fathersNationality" 
            value={formData.fathersNationality} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
            label="Mother's Name" 
            variant="filled" 
            fullWidth 
            required 
            name="mothersName" 
            value={formData.mothersName} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="Mother's Country of Birth" 
            variant="filled" 
            fullWidth 
            required 
            name="mothersCountryOfBirth" 
            value={formData.mothersCountryOfBirth} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField 
            label="Mother's Nationality" 
            variant="filled" 
            fullWidth 
            required 
            name="mothersNationality" 
            value={formData.mothersNationality} 
            onChange={handleChange} 
            size='small'
          />
        </Grid>

        {/* Buttons */}
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button variant="contained" color="secondary" onClick={() => navigate('/VisaProcessingHome')}>Go Back</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Save and Continue</Button>
        </Box>
      </Grid>
    </Box>
  );
}

export default VisaProcessingForm;
