import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import ToutismAuthority from "../ToutismAuthority.png";
import Facebook from "../Facebook.png";
import Instagram from "../Instagram.png";
import Tiktok from "../Tiktok.png";
import Youtube from "../Youtube.png";

const Footer = () => {
  return (
    <Box 
  component="footer" 
  className="text-white py-5"  
  style={{ 
    backgroundColor: '#006666', 
    color: '#fff', 
    width: {
      xs: '100%',  // Full width on extra small screens
      sm: '80%',   // 80% width on small screens
      md: '60%',   // 60% width on medium screens
      lg: '40%',   // 40% width on large screens
      xl: '30%'    // 30% width on extra large screens
    } 
  }}
>
      <Container maxWidth={false} sx={{ width: '100%', padding: 0 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Tourism Authority Section */}
          <Grid item xs={12} md={3} className="text-center">
            <img
              src={ToutismAuthority}
              alt="Tourism Authority Logo"
              className="mx-auto mb-2"
              style={{ maxWidth: '100px' }}
            />
            <Typography variant="body2">Tourism Authority</Typography>
            <Typography variant="body2">1922</Typography>
            <Typography variant="body2">Associated Service 1936</Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            {/* Use Tailwind classes for spacing and layout */}
            <div className="space-y-1">
              <Link href="#" color="inherit" underline="none">Terms of Use</Link><br />
              <Link href="#" color="inherit" underline="none">Site Map</Link><br />
              <Link href="#" color="inherit" underline="none">Contact Us</Link><br />
              <Link href="#" color="inherit" underline="none">Investor Relations Unit</Link><br />
              <Link href="#" color="inherit" underline="none">Complaints</Link><br />
              <Link href="#" color="inherit" underline="none">Tenders</Link><br />
              <Link href="#" color="inherit" underline="none">Important Notices</Link><br />
              <Link href="#" color="inherit" underline="none">How to Fly Your Drone Legitimately</Link><br />
              <Link href="#" color="inherit" underline="none">SLTPB Progress Report</Link><br />
            </div>
          </Grid>

          {/* Other Sites Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Other Sites
            </Typography>
            {/* Use Tailwind classes for spacing and layout */}
            <div className="space-y-1">
              <Link href="#" color="inherit" underline="none">Sri Lanka Tourism Development Authority</Link><br />
              <Link href="#" color="inherit" underline="none">Sri Lanka Tourism Convention</Link><br />
              <Link href="#" color="inherit" underline="none">Management</Link><br />
              <Link href="#" color="inherit" underline="none">Ministry of Tourism</Link><br />
              <Link href="#" color="inherit" underline="none">SriLankan Airlines</Link><br />
              <Link href="#" color="inherit" underline="none">Sri Lanka Airport & Aviation Services</Link><br />
              <Link href="#" color="inherit" underline="none">Department of Immigration and Emigration</Link><br />
              <Link href="#" color="inherit" underline="none">Electronic Travel Authorization System</Link><br />
              <Link href="#" color="inherit" underline="none">Sri Lanka Association of Inbound Tour Operators</Link><br />
              <Link href="#" color="inherit" underline="none">Sri Lanka Pavilion at EXPO 2020 in Dubai</Link><br />
            </div>
          </Grid>
        </Grid>

        {/* Social Media Icons and Bottom Text */}
        <Box className="text-center mt-5 border-t border-white pt-4">
          <div className="flex justify-center space-x-4 mb-4">
            <img src={Facebook} alt="Facebook Logo" className="w-6 h-6" />
            <img src={Instagram} alt="Instagram Logo" className="w-6 h-6" />
            <img src={Tiktok} alt="Tiktok Logo" className="w-6 h-6" />
            <img src={Youtube} alt="Youtube Logo" className="w-6 h-6" />
          </div>
          <Typography variant="body2" gutterBottom>
            © 2024 All Rights Reserved by Sri Lanka Tourism Promotion.
          </Typography>
          <Typography variant="body2">
            <Link href="#" color="inherit" underline="none">Privacy Policy</Link> | 
            <Link href="#" color="inherit" underline="none">Terms & Conditions</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
