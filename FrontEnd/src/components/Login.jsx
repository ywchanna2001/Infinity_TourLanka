// src/components/Login.jsx

import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {

  const handleGoogleSuccess = (response) => {
    console.log('Google Login Success:', response);
    // Handle successful login here
  };

  const handleGoogleFailure = (error) => {
    console.log('Google Login Failed:', error);
    // Handle failed login here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('YOUR_BACKGROUND_IMAGE_URL')` }}>
      <div className="bg-white/80 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <img src="YOUR_LOGO_URL" alt="Tour Lanka Logo" className="mx-auto h-16 w-16" />
          <h2 className="text-2xl font-semibold mt-4">Log in to your account</h2>
          <p className="text-gray-600">Welcome back! Please enter your details.</p>
        </div>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me" className="text-gray-600">Remember me</label>
            </div>
            <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
            Sign in
          </button>
        </form>

        <div className="my-4 text-center">
          <p>or</p>
        </div>

        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          render={(renderProps) => (
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.4h6.5c-.3 1.5-1.2 2.7-2.4 3.6v3h3.8c2.2-2 3.5-5 3.5-8.8z"/>
                <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.8-3l-3.8-3c-1 0.7-2.2 1.1-3.6 1.1-2.8 0-5.2-1.9-6-4.5H2.4v3H12z"/>
                <path fill="#FBBC05" d="M6 14.3c-.1-.4-.1-.7-.1-1.1 0-.4 0-.8.1-1.1H2.4v-3H.1c-.2 1.1-.3 2.3-.3 3.5 0 1.2.1 2.3.3 3.5h3.6v-3z"/>
                <path fill="#EA4335" d="M12 4.8c1.6 0 3 .6 4.1 1.8l3.1-3.1C16.9 1.6 14.5 0 12 0 7.4 0 3.6 3.1 2.4 7.3H6v3h6V4.8z"/>
              </svg>
              Sign in with Google
            </button>
          )}
        />

        <div className="text-center mt-6">
          <p>Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
