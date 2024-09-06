import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import loginimage from '../assets/login.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // For sign-up
  const [confirmPassword, setConfirmPassword] = useState(''); // For sign-up
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between login and sign-up
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const navigate = useNavigate();

  const validateLoginForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!password) {
      formErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters long';
    }

    return formErrors;
  };

  const validateSignUpForm = () => {
    let formErrors = validateLoginForm();

    if (!name) {
      formErrors.name = 'Name is required';
    }

    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formErrors = isSignUp ? validateSignUpForm() : validateLoginForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    setLoading(true);
    setErrors({});
  
    try {
      const endpoint = isSignUp ? 'http://localhost:8000/signup' : 'http://localhost:8000/login';
      const requestBody = isSignUp 
        ? { user_name: name, user_email: email, user_pw: password } 
        : { email: email, password: password };
  
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('access_token', data.access_token);
        console.log('User_email:', data.user_email);

        console.log(localStorage.getItem('access_token'));
  
        if (data.user_email === "admin@gmail.com") {
          navigate('/AdminDashboard');
        } else {
          navigate('/VisaProcessingHome');
        }
      } else {
        setApiError(data.detail || 'An error occurred');
      }
    } catch (error) {
      setApiError('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" style={{ backgroundImage: `url(${loginimage})`, backgroundSize: "cover" }}>
      {/* Left background section */}
      <div className="flex-1 bg-cover bg-center bg-no-repeat hidden lg:block"></div>

      {/* Right section */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-1" style={{ opacity: 0.9 }}>
        <div className="max-w-md w-full bg-white/80 p-8 rounded-lg shadow-lg">
          <div className="text-center mb-6">
            <img src={Logo} alt="Tour Lanka Logo" className="mx-auto h-16 w-25" />
            <h2 className="text-2xl font-semibold mt-4">{isSignUp ? 'Sign Up' : 'Log in to your account'}</h2>
            <p className="text-gray-600">{isSignUp ? 'Create a new account.' : 'Welcome back! Please enter your details.'}</p>
          </div>

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="mb-2">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 mt-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
            )}

            <div className="mb-2">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full px-4 py-2 mt-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4 flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className={`w-full px-4 py-2 mt-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {isSignUp && (
                <div className="flex-1">
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className={`w-full px-4 py-2 mt-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mb-4">
              {!isSignUp && (
                <div className="flex items-center">
                  <input type="checkbox" id="remember-me" className="mr-2" />
                  <label htmlFor="remember-me" className="text-gray-600">Remember me</label>
                </div>
              )}
              
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              {loading ? (isSignUp ? 'Signing up...' : 'Logging in...') : (isSignUp ? 'Sign Up' : 'Login')}
            </button>
          </form>

          <div className="my-2 text-center">
            <p>or</p>
          </div>

          {/* <button
            className="w-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.4h6.5c-.3 1.5-1.2 2.7-2.4 3.6v3h3.8c2.2-2 3.5-5 3.5-8.8z"/>
              <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.8-3l-3.8-3c-1 0.7-2.2 1.1-3.6 1.1-2.8 0-5.2-1.9-6-4.5H2.4v3H12z"/>
              <path fill="#FBBC05" d="M6 14.3c-.1-.4-.1-.7-.1-1.1 0-.4 0-.8.1-1.1H2.4v-3H.1c-.2 1.1-.3 2.3-.3 3.5 0 1.2.1 2.3.3 3.5h3.6v-3z"/>
              <path fill="#EA4335" d="M12 4.8c1.6 0 3 .6 4.1 1.8l3.1-3.1C16.9 1.6 14.5 0 12 0 7.4 0 3.6 3.1 2.4 7.3H6v3h6V4.8z"/>
            </svg>
            Sign in with Google
          </button> */}

          <div className="text-center mt-1">
            <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"} <a href="#" onClick={() => setIsSignUp(!isSignUp)} className="text-blue-500 hover:underline">{isSignUp ? 'Log in' : 'Sign up'}</a></p>
          </div>

          {apiError && <p className="text-red-500 text-center mt-2">{apiError}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
