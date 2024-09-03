import React from "react";
import { TextField, Button } from "@mui/material";
import background from "../assets/background test.jpg";

const DividerWithText = ({ text }) => {
  return (
    <div className="relative flex py-5 items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-500">{text}</span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

const TravelForm = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div
        className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-md"
        style={{
          background: "rgba(255, 255, 255, 0.3)", // Semi-transparent background
          backdropFilter: "blur(10px)", // Glass-like blur effect
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }}
      >
        <h2 className="text-center text-2xl font-semibold mb-6">Let's Fill</h2>

        <DividerWithText text="Travel Details" />

        <div className="grid grid-cols-3 gap-6">
          <div>
            <TextField
              label="Select Your Occupation"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          </div>
          <div>
            <TextField
              label="You're From"
              variant="outlined"
              fullWidth
              sx={{ mb: 2, mt: 10 }}
            />
          </div>
          <div>
            <TextField
              label="Your Age"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          </div>
        </div>

        <DividerWithText text="Travel Dates" />

        <div className="grid grid-cols-3 gap-6">
          <div>
            <TextField
              label="Start Date"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Preferred Destinations"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          </div>
          <div></div>
          <div>
            <TextField
              label="End Date"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Travel Type"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          </div>
        </div>

        <DividerWithText text="Preferences" />

        <div className="grid grid-cols-3 gap-6">
          <div>
            <TextField
              label="Accommodation Type"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Activities"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          </div>
          <div></div>
          <div>
            <TextField
              label="Transportation"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Dietary Preferences"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
          </div>
        </div>

        <DividerWithText text="Additional Comments" />

        <div className="mt-6">
          <TextField label="Comments" variant="outlined" fullWidth multiline />
        </div>

        <div className="flex justify-center mt-6">
          <Button variant="contained" color="primary">
            Let's Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
