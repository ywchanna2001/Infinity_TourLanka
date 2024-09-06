import React, { useState } from "react";
import axios from "axios";
import emailjs from "emailjs-com"; // Import EmailJS
import "../styles/visaapprovebutton.css";

const VisaApproveButton = ({ onStatusChange, id, endpointUrl }) => {
  const [status, setStatus] = useState(null);

  // Handle visa status change (approve/deny)
  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);

    try {
      const accessToken = localStorage.getItem("access_token");

      // Update visa approval status in the backend
      const response = await axios.put(
        `http://localhost:8000/update_personal_info_visa_approve_status/${id}`,
        { new_status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Fetch applicant data after successfully updating status
        const applicantData = await fetchApplicantData(id);

        // If applicant data is fetched, send the email
        if (applicantData) {
          sendEmail(applicantData, newStatus);  // Pass id to sendEmail function
        }

        window.location.reload();  // Reload the page
        onStatusChange(response.data.message); // Notify parent component
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Fetch applicant data for sending email
  const fetchApplicantData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8000/send_email/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log("Applicant data fetched successfully:", response.data); // Moved log here
      return response.data;
    } catch (error) {
      console.error("Error fetching applicant data:", error.message);
      return null;
    }
  };

  // Send email using EmailJS
  const sendEmail = (applicantData, status) => {
    const templateParams = {
      to_name: `${applicantData.firstName} ${applicantData.lastName}`,
      to_email: applicantData.email,
      visa_status: status,
    };

    // Send email via EmailJS
    emailjs
      .send("service_1tolmgk", "template_6twf1vl", templateParams, "ZVekm6kosrJv4FbaA")
      .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Visa status update email sent successfully!");
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send visa status email.");
      });
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
  