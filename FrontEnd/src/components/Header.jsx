import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Avatar } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from "../assets/Logo.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Handle logout logic here
    // For example, clear authentication tokens, user data, etc.
    
    // Navigate to the Login page
    navigate('/logout '); // Adjust the route to your login page
    handleClose();
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#006666', color: '#fff' }}>
      <Toolbar>
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img
            src={Logo}
            alt="Logo"
            style={{ maxWidth: '120px', marginRight: '20px' }}
          />
          <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <Link to="/Home" style={{ color: '#fff', textDecoration: 'none', margin: '0 15px' }}>
              Home
            </Link>
            <Link to="/VisaProcessingHome" style={{ color: '#fff', textDecoration: 'none', margin: '0 15px' }}>
              Visa
            </Link>
            <Link to="/TourGenerating" style={{ color: '#fff', textDecoration: 'none', margin: '0 15px' }}>
              Tours
            </Link>
            <Link to="/security" style={{ color: '#fff', textDecoration: 'none', margin: '0 15px' }}>
              Security
            </Link>
          </div>
          <div>
            <IconButton
              onClick={handleClick}
              size="small"
              edge="end"
              aria-controls={open ? 'user-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              {/* <Typography variant="body1" style={{ margin: '10px', color: '#fff' }}>
                userName
              </Typography> */}
              <Avatar alt="User" src="/path/to/user/image.jpg" />
            </IconButton>
            <Menu 
              id="user-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2))',
                  mt: 1.5,
                  bgcolor: '#333',
                  color: '#fff',
                  '& .MuiMenuItem-root': {
                    '&:hover': {
                      bgcolor: '#555',
                      color: '#fff',
                    },
                  },
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: '#333',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
            >
              <MenuItem onClick={handleClose} sx={{ color: '#fff' }}>
                <Avatar sx={{ width: 32, height: 32, mr: 1 }} /> Profile
              </MenuItem>
              <MenuItem onClick={handleLogout} sx={{ color: '#fff' }}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
