import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear local storage
    localStorage.removeItem('access_token');

    // Redirect to login page
    navigate('/Login');
  }, [navigate]);

  return (
    <div className="text-center mt-4">
      <p>Logging you out...</p>
    </div>
  );
};

export default Logout;
