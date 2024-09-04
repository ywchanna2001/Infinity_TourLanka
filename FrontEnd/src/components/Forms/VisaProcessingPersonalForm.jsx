import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function VisaProcessingForm() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  // State to manage form inputs
  const [formData, setFormData] = useState({
    prefix: "Mr",
    firstName: "",
    middleName: "",
    lastName: "",
    dateOfBirth: "",
    religion: "",
    gender: "Male",
    maritalStatus: "Single",
    countryOfBirth: "",
    cityOfBirth: "",
    presentAddress: "",
    countryOfResidence: "",
    postalCode: "",
    mobileNumber: "",
    email: "",
    educationLevel: "",
    fieldOfStudy: "",
    occupation: "",
    companyName: "",
    companyAddress: "",
    fathersName: "",
    fathersCountryOfBirth: "",
    fathersNationality: "",
    mothersName: "",
    mothersCountryOfBirth: "",
    mothersNationality: "",
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});

  // Handle change in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "" && key !== "middleName") {
        // Allow 'middleName' to be empty
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (validateForm()) {
      console.log(formData);
      navigate("/VisaProcessingTravel");
    }
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
      <Typography fontSize='24px' fontWeight="700" color="primary" mb={2} >
        Personal Information
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Row 1: Prefix, Name */}
          <Grid item xs={12} sm={2}>
            <FormControl fullWidth variant="filled" required size="small" color="primary" focused>
              <InputLabel>Prefix</InputLabel>
              <Select
                name="prefix"
                value={formData.prefix}
                onChange={handleChange}
                size="small"
                color="primary"
                focused
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
              size="small"
              error={!!errors.firstName}
              helperText={errors.firstName}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Middle Name"
              variant="filled"
              fullWidth
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              size="small"
              error={!!errors.middleName}
              helperText={errors.middleName}
              color="primary"
              focused
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
              size="small"
              error={!!errors.lastName}
              helperText={errors.lastName}
              color="primary"
              focused
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
              size="small"
              error={!!errors.dateOfBirth}
              helperText={errors.dateOfBirth}
              color="primary"
              focused
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
              size="small"
              error={!!errors.religion}
              helperText={errors.religion}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth required variant="filled" size="small" color="primary" focused>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                size="small"
                color="primary"
                focused
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Row 3: Marital Status */}
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth required variant="filled" size="small" color="primary" focused>
              <InputLabel>Marital Status</InputLabel>
              <Select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                size="small"
                color="primary"
                focused
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
              size="small"
              error={!!errors.countryOfBirth}
              helperText={errors.countryOfBirth}
              color="primary"
              focused
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
              size="small"
              error={!!errors.cityOfBirth}
              helperText={errors.cityOfBirth}
              color="primary"
              focused
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
              size="small"
              error={!!errors.presentAddress}
              helperText={errors.presentAddress}
              color="primary"
              focused
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
              size="small"
              error={!!errors.countryOfResidence}
              helperText={errors.countryOfResidence}
              color="primary"
              focused
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
              size="small"
              error={!!errors.postalCode}
              helperText={errors.postalCode}
              color="primary"
              focused
            />
          </Grid>

          {/* Row 6: Mobile and Email */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mobile Number"
              variant="filled"
              fullWidth
              required
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              size="small"
              error={!!errors.mobileNumber}
              helperText={errors.mobileNumber}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="filled"
              fullWidth
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
              error={!!errors.email}
              helperText={errors.email}
              color="primary"
              focused
            />
          </Grid>

          {/* Row 7: Education and Occupation */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Education Level"
              variant="filled"
              fullWidth
              required
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              size="small"
              error={!!errors.educationLevel}
              helperText={errors.educationLevel}
              color="primary"
              focused
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
              size="small"
              error={!!errors.fieldOfStudy}
              helperText={errors.fieldOfStudy}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Occupation"
              variant="filled"
              fullWidth
              required
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              size="small"
              error={!!errors.occupation}
              helperText={errors.occupation}
              color="primary"
              focused
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
              size="small"
              error={!!errors.companyName}
              helperText={errors.companyName}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              label="Company Address"
              variant="filled"
              fullWidth
              required
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              size="small"
              error={!!errors.companyAddress}
              helperText={errors.companyAddress}
              color="primary"
              focused
            />
          </Grid>

          {/* Row 8: Parents' Information */}
          <Grid item xs={12} sm={6}>
            <TextField
              label="Father's Name"
              variant="filled"
              fullWidth
              required
              name="fathersName"
              value={formData.fathersName}
              onChange={handleChange}
              size="small"
              error={!!errors.fathersName}
              helperText={errors.fathersName}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Father's Country of Birth"
              variant="filled"
              fullWidth
              required
              name="fathersCountryOfBirth"
              value={formData.fathersCountryOfBirth}
              onChange={handleChange}
              size="small"
              error={!!errors.fathersCountryOfBirth}
              helperText={errors.fathersCountryOfBirth}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Father's Nationality"
              variant="filled"
              fullWidth
              required
              name="fathersNationality"
              value={formData.fathersNationality}
              onChange={handleChange}
              size="small"
              error={!!errors.fathersNationality}
              helperText={errors.fathersNationality}
              color="primary"
              focused
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
              size="small"
              error={!!errors.mothersName}
              helperText={errors.mothersName}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mother's Country of Birth"
              variant="filled"
              fullWidth
              required
              name="mothersCountryOfBirth"
              value={formData.mothersCountryOfBirth}
              onChange={handleChange}
              size="small"
              error={!!errors.mothersCountryOfBirth}
              helperText={errors.mothersCountryOfBirth}
              color="primary"
              focused
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Mother's Nationality"
              variant="filled"
              fullWidth
              required
              name="mothersNationality"
              value={formData.mothersNationality}
              onChange={handleChange}
              size="small"
              error={!!errors.mothersNationality}
              helperText={errors.mothersNationality}
              color="primary"
              focused
            />
          </Grid>
        </Grid>

        <Box mt={2} display="flex" justifyContent="space-between">
  <Button 
    variant="contained" 
    color="primary"  
    onClick={() => handleNavigate('/VisaProcessingHome')}
  >
    Back
  </Button>
  
  <Button
    type="submit"
    variant="contained"
    color="primary"
    sx={{ marginLeft: 'auto' }}
  >
    Save and Continue
  </Button>
</Box>

      </form>
    </Box>
  );
}

export default VisaProcessingForm;
