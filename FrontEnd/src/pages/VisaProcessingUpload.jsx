import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import VisaProcessingBG from "../components/VisaProcessingBackground";
import ProgressBar from "../components/VisaProcessingProgressBar/ProgressBarUploadDocs";
import { useNavigate } from "react-router-dom";

function VisaProcessingUpload() {
  const [passportPhoto, setPassportPhoto] = useState(null);
  const [bioPagePhoto, setBioPagePhoto] = useState(null);
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  // Handle passport photo upload
  const handlePassportPhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPassportPhoto(file); // Save the actual file, not just URL
    }
  };

  // Handle bio page photo upload
  const handleBioPagePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBioPagePhoto(file); // Save the actual file, not just URL
    }
  };

  // Handle submission of the images
  const handleSubmit = async () => {
    if (!passportPhoto || !bioPagePhoto) {
      alert("Please upload both the passport photo and bio page.");
      return;
    }

    // Create a FormData object to submit the photos
    const formData = new FormData();
    formData.append("passportPhoto", passportPhoto); // Name these as per your backend API's expectation
    formData.append("bioPagePhoto", bioPagePhoto);

    try {
      // Replace the URL with your API endpoint
      const response = await fetch("https://your-backend-url.com/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Navigate to the next step if upload is successful
        navigate("/VisaProcessingHome");
      } else {
        // Handle errors if the upload fails
        alert("Error uploading files. Please try again.");
      }
    } catch (error) {
      console.error("Error during upload:", error);
      alert("Error uploading files. Please try again.");
    }
  };

  return (
    <VisaProcessingBG>
      <Typography
        fontSize="32px"
        color="primary"
        mb={4}
        fontWeight={700}
        align="left"
        marginLeft={isSmallScreen ? "16px" : "200px"}
        sx={{ textAlign: "left", width: "100%" }}
      >
        Sri Lanka EVisa
      </Typography>

      <ProgressBar />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        border="2px solid white"
        padding="16px"
        marginTop="40px"
        sx={{
          width: "90%",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* Passport Photo Upload */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={isSmallScreen ? "column" : "row"}
          alignItems="center"
          border="2px solid white"
          padding="16px"
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="16px"
            sx={{ mb: isSmallScreen ? "16px" : "0" }}
          >
            <Typography color="white" marginBottom="16px">
              Passport size colored photo <br />
              (.jpg files up to 2mb)
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              border="1px dashed white"
              padding="16px"
              borderRadius="8px"
              width="100%"
            >
              <img
                src="/path-to-your-icon.png"
                alt="Upload Icon"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "16px",
                }}
              />

              <Typography color="white" marginRight="16px">
                Select a file or drag and drop here
              </Typography>

              <input
                accept="image/*"
                id="upload-passport-photo"
                type="file"
                style={{ display: "none" }}
                onChange={handlePassportPhotoUpload}
              />
              <label htmlFor="upload-passport-photo">
                <Button variant="contained" component="span">
                  Select FILE
                </Button>
              </label>
            </Box>
          </Box>

          {/* Display Uploaded Passport Photo */}
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid white"
            height="270px"
            width="210px"
            sx={{
              marginLeft: isSmallScreen ? "0" : "16px",
              marginRight: isSmallScreen ? "0" : "50px",
              maxWidth: "210px",
              maxHeight: "270px",
            }}
          >
            {passportPhoto ? (
              <img
                src={URL.createObjectURL(passportPhoto)}
                alt="Uploaded Passport"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <Typography color="white">No photo uploaded</Typography>
            )}
          </Box>
        </Box>

        {/* Bio Page Photo Upload */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={isSmallScreen ? "column" : "row"}
          alignItems="center"
          border="2px solid white"
          padding="16px"
          marginTop="20px"
          sx={{
            width: "100%",
            height: "auto",
          }}
        >
          <Box
            flex="1"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid white"
            height="270px"
            width="340px"
            sx={{
              marginLeft: "16px",
              marginRight: "16px",
              maxWidth: "340px",
              maxHeight: "270px",
              mb: isSmallScreen ? "16px" : "0",
            }}
          >
            {bioPagePhoto ? (
              <img
                src={URL.createObjectURL(bioPagePhoto)}
                alt="Uploaded Bio Page"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <Typography color="white">No photo uploaded</Typography>
            )}
          </Box>

          <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="16px"
          >
            <Typography color="white" marginBottom="16px">
              Passport bio page <br />
              (.jpg files up to 2mb)
            </Typography>

            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              border="1px dashed white"
              padding="16px"
              borderRadius="8px"
              width="100%"
            >
              <img
                src="/path-to-your-icon.png"
                alt="Upload Icon"
                style={{
                  width: "40px",
                  height: "40px",
                  marginRight: "16px",
                }}
              />

              <Typography color="white" marginRight="16px">
                Select a file or drag and drop here
              </Typography>

              <input
                accept="image/*"
                id="upload-bio-page-photo"
                type="file"
                style={{ display: "none" }}
                onChange={handleBioPagePhotoUpload}
              />
              <label htmlFor="upload-bio-page-photo">
                <Button variant="contained" component="span">
                  SELECT FILE
                </Button>
              </label>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Navigation Buttons */}
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        sx={{
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#006666",
            color: "white",
            mb: isSmallScreen ? "16px" : "0",
          }}
          onClick={() => navigate("/VisaProcessingHome")}
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
          onClick={handleSubmit} // Add submit action here
        >
          Save and Continue
        </Button>
      </Box>
    </VisaProcessingBG>
  );
}

export default VisaProcessingUpload;
