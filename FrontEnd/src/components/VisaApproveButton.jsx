import React, { useState } from "react";
import axios from "axios";
import "../styles/visaapprovebutton.css"; // Ensure correct path

const VisaApproveButton = ({ onStatusChange, id, endpointUrl }) => {
  const [status, setStatus] = useState(null);
  
  // Corrected: console.log instead of consol.log
  console.log("id", id);
  console.log("endpointUrl", endpointUrl);

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);

    

    try {
      console.log(newStatus);
      const accessToken = localStorage.getItem("access_token");
      const response = await axios.put(
        `http://localhost:8000/update_personal_info_visa_approve_status/${id}`,
        { new_status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
          
        window.location.reload();
        onStatusChange(data.message);
        console.log(response.data)
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="btn-types align-items-center">
      <div className="btn-panel flex">
        {status === null ? (
          <>
            <button className="img-button1" onClick={() => handleStatusChange("Approved")}>
              Approve
            </button>
            <button className="img-button2" onClick={() => handleStatusChange("Deny")}>
              Deny
            </button>
          </>
        ) : (
          <p className="btn-status">{status}</p>
        )}
      </div>
    </div>
  );
};

export default VisaApproveButton;
