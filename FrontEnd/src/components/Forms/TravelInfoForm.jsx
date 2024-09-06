import React, { useState } from 'react';
import { Box, TextField, Typography, Grid, MenuItem, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const TravelInfoForm = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", 
    "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
    "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", 
    "Congo (Democratic Republic of the)", "Costa Rica", "Croatia", "Cuba", "Cyprus", 
    "Czech Republic (Czechia)", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", 
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
    "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", 
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", 
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", 
    "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", 
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", 
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", 
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", 
    "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", 
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", 
    "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", 
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", 
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", 
    "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", 
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
    "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", 
    "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", 
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", 
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", 
    "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", 
    "Zambia", "Zimbabwe"
  ];
  
  const nationalities = [
    "Afghan", "Albanian", "Algerian", "Andorran", "Angolan", "Antiguan and Barbudan",
    "Argentine", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini",
    "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese",
    "Bolivian", "Bosnian and Herzegovinian", "Botswana", "Brazilian", "Bruneian", "Bulgarian",
    "Burkinabe", "Burundian", "Cape Verdean", "Cambodian", "Cameroonian", "Canadian",
    "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comorian", "Congolese",
    "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djiboutian", "Dominican",
    "Dominican", "Ecuadorian", "Egyptian", "El Salvadoran", "Equatorial Guinean", "Eritrean",
    "Estonian", "Eswatini", "Ethiopian", "Fijian", "Finnish", "French", "Gabonese", "Gambian",
    "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinean",
    "Guinea-Bissauan", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelandic", "Indian",
    "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Jamaican", "Japanese",
    "Jordanian", "Kazakh", "Kenyan", "Kiribati", "Kuwaiti", "Kyrgyzstani", "Laotian", "Latvian",
    "Lebanese", "Lesotho", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger",
    "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese", "Marshallese",
    "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monegasque", "Mongolian",
    "Montenegrin", "Moroccan", "Mozambican", "Burmese", "Namibian", "Nauruan", "Nepalese",
    "Dutch", "New Zealander", "Nicaraguan", "Nigerien", "Nigerian", "North Korean", "North Macedonian",
    "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan",
    "Peruvian", "Philippine", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan",
    "Kittitian and Nevisian", "Saint Lucian", "Saint Vincentian", "Samoan", "Sammarinese",
    "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean",
    "Slovak", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "South Sudanese",
    "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swedish", "Swiss", "Syrian", "Taiwanese",
    "Tajik", "Tanzanian", "Thai", "Timorese", "Togolese", "Tongan", "Trinidadian and Tobagonian",
    "Tunisian", "Turkish", "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Emirati", "British",
    "American", "Uruguayan", "Uzbekistani", "Vanuatuan", "Vatican", "Venezuelan", "Vietnamese",
    "Yemeni", "Zambian", "Zimbabwean"
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
    emergencyMobileNumber: '',
    travelHistory: ''
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Print the form data to the console
    
    
    // Reset form data after submission
    const accessToken = localStorage.getItem("access_token");
    try {
      const response = await axios.post(
        "http://localhost:8000/travel-info",
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      // Navigate to the next page upon successful submission
      navigate("/VisaProcessingUpload");
    } catch (error) {
      console.error("Error:", error);
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
  SelectProps={{
    MenuProps: {
      PaperProps: {
        sx: {
          bgcolor: 'black', // Background color for the entire dropdown
          '& .MuiMenuItem-root': {
            color: 'white', // Text color for each dropdown option
          },
          '& .MuiMenuItem-root:hover': {
            bgcolor: 'grey', // Background color on hover
          },
        },
      },
    },
  }}
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
  SelectProps={{
    MenuProps: {
      PaperProps: {
        sx: {
          bgcolor: 'black', // Background color for the entire dropdown
          '& .MuiMenuItem-root': {
            color: 'white', // Text color for each dropdown option
          },
          '& .MuiMenuItem-root:hover': {
            bgcolor: 'grey', // Background color on hover
          },
        },
      },
    },
  }}
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
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: 'black', // Background color for the entire dropdown
                      '& .MuiMenuItem-root': {
                        color: 'white', // Text color for each dropdown option
                      },
                      '& .MuiMenuItem-root:hover': {
                        bgcolor: 'grey', // Background color on hover
                      },
                    },
                  },
                },
              }}
            >
              {nationalities.map((nationality) => (
                <MenuItem key={nationality} value={nationality}>
                  {nationality}
                </MenuItem>
              ))}
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
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: 'black', // Background color for the entire dropdown
                      '& .MuiMenuItem-root': {
                        color: 'white', // Text color for each dropdown option
                      },
                      '& .MuiMenuItem-root:hover': {
                        bgcolor: 'grey', // Background color on hover
                      },
                    },
                  },
                },
              }}
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
              SelectProps={{
                MenuProps: {
                  PaperProps: {
                    sx: {
                      bgcolor: 'black', // Background color for the entire dropdown
                      '& .MuiMenuItem-root': {
                        color: 'white', // Text color for each dropdown option
                      },
                      '& .MuiMenuItem-root:hover': {
                        bgcolor: 'grey', // Background color on hover
                      },
                    },
                  },
                },
              }}
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

        <Typography variant="h6" mt={4} mb={2}>
          Travel History of last 12 months
        </Typography>
        <Grid container spacing={2}>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Travelled countries"
              helperText="Add the countries that you travelled in last 12 months"
              fullWidth
              variant="filled"
              size="small"
              required
              name="travelHistory"
              value={formData.travelHistory}
              onChange={handleInputChange}
              focused
              color="primary"
            />
          </Grid>
        

        {/* Buttons */}
        <Box mt={4} display="flex" justifyContent="space-between">
          
          
          <Button
            variant="contained"
            sx={{ backgroundColor: "#006666", color: "white" }}
            onClick={() => handleNavigate("/VisaProcessingTravel")}
          >
            Back
          </Button>

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#006666",
              color: "white",
              marginLeft: "auto",
            }}
            
          >
            Save and Continue
          </Button>


        </Box>
      </Box>
    </Box>
  );
};

export default TravelInfoForm;
