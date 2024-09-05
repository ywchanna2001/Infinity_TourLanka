import React from "react";
import { Box, Typography } from "@mui/material";
import TravelInfoForm from "../components/Forms/TravelInfoForm";
import VisaProcessingBG from "../components/VisaProcessingBackground";
import ProgressBar from "../components/VisaProcessingProgressBar/ProgressBarTravelInfo";

function VisaProcessingTravel() {
  return (
    <VisaProcessingBG>
      <Typography
        fontSize="32px"
        color="primary"
        mb={4}
        fontWeight={700}
        align="left"
        marginLeft="200px"
        sx={{ textAlign: "left", width: "100%" }}
      >
        Sri Lanka EVisa
      </Typography>
      <ProgressBar></ProgressBar>
      <div
        style={{
          marginTop: "60px",
          border: "2px solid white",
          padding: "16px", // Optional: to create some space between the content and the border
          borderRadius: "8px", // Optional: to add rounded corners
        }}
      >
        <TravelInfoForm />
      </div>
    </VisaProcessingBG>
  );
}

export default VisaProcessingTravel;
