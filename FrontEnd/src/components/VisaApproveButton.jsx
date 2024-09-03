import React, { useState } from "react";
import Modal from "react-modal";
import { ImCheckmark, ImCross } from "react-icons/im";
import "../styles/visaapprovebutton.css";
import { set } from "date-fns";
import axios from "axios";

function VisaApproveButton(onStatusChange, id, endpointUrl ) {

  const [status, setStatus] = useState(null);
  const [modalIsOpen,setModalIsOpen]= useState(false);

  

  const handleStatusChange = async (newStatus) => {
    setStatus(newStatus);

    const accessToken = localStorage.getItem("token");

    try {
      const response = await axios.put(
        endpointUrl.replace("{id}", id),
        { new_status: newStatus },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Response:", id, response.data.message);

      if (response.status === 200) {
        const data = response.data;
        onStatusChange(data.message);
      } else {
        throw new Error("Failed to update status");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="btn-types align-items-center">
      <div className="btn-panel flex ">
        {status === null && (
          <>
            <button className="img-button1" onClick={()=>handleStatusChange("approved")}>
              Approve
            </button>
            <button className="img-button2" onClick={() => handleStatusChange("rejected")}>
              Reject
            </button>
          </>
        )}
      </div>
      {status && <p className="btn-status">{status}</p>}
    </div>
  )
}

export default VisaApproveButton
