import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';


const Header = () => {
  return (
    <AppBar position="static" 
    style={{ 
        backgroundColor: '#006666', 
        color: '#fff', }}>
      <Toolbar className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <img
              src={Logo}
              alt="Logo"
              className="mx-auto mb-2"
              style={{ maxWidth: '100px' }}
            />
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/visa" className="text-white hover:text-gray-200">
            Visa
          </Link>
          <Link to="/tours" className="text-white hover:text-gray-200">
            Tours
          </Link>
          <Link to="/security" className="text-white hover:text-gray-200">
            Security
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
