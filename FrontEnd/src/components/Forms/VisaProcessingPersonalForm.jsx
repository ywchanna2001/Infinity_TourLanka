import React from 'react';
import { Box, TextField, Typography, Button, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function VisaProcessingForm() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <Box 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: '2rem', 
        borderRadius: '10px',
        margin: 'auto',
        maxWidth: '800px'
      }}
    >
      <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
        Personal Information
      </Typography>

      <Grid container spacing={2}>
        {/* Row 1: Name and Gender */}
        <Grid item xs={12} sm={2}>
          <TextField label="Prefix" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="First Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Middle Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Last Name" variant="outlined" fullWidth />
        </Grid>

        {/* Row 2: Date of Birth and Religion */}
        <Grid item xs={12} sm={4}>
          <TextField label="Date of Birth" type="date" variant="outlined" fullWidth InputLabelProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="Religion" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Gender</InputLabel>
            <Select variant="outlined">
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Row 3: Birth Information */}
        <Grid item xs={12} sm={6}>
          <TextField label="Country of Birth" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City of Birth" variant="outlined" fullWidth />
        </Grid>

        {/* Row 4: Address and Contact */}
        <Grid item xs={12} sm={6}>
          <TextField label="Present Address (House No/Street)" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Country" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Postal/Zip Code" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Mobile Number" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Email" variant="outlined" fullWidth />
        </Grid>

        {/* Education and Occupation */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" color="white" mt={4} mb={2}>
            Education and Occupation
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Highest Level of Education" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Field of Study" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Present Occupation" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Company Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Company Address" variant="outlined" fullWidth />
        </Grid>

        {/* Family Details */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" color="white" mt={4} mb={2}>
            Family Details
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Father's Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Country of Birth" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Nationality" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Mother's Name" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Country of Birth" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField label="Nationality" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      {/* Buttons */}
      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="contained" color="secondary" onClick={() => handleNavigate('/VisaProcessingHome')}>Go Back</Button>
        <Button variant="contained" color="primary" onClick={() => handleNavigate('/VisaProcessingTravel')}>Save and Continue</Button>
      </Box>
    </Box>
  );
}

export default VisaProcessingForm;
