import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/visaApprovetable.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontFamily: 'Inter',
    fontSize: '15px',
    fontStyle: 'normal',
    fontWeight: 800,
    lineHeight: 'normal',
    letterSpacing: '0.18px',
  },
  [`&.${tableCellClasses.body}`]: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '0.18px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#939393',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const itemsPerPages = 8;

function VisaApproveTable(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [applicant, setapplicant] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchApplicant = async () => {
            try {
              const accessToken = localStorage.getItem('access_token');
              if (!accessToken) {
                console.error('Token not found');
                return;
              }
          
              const response = await axios.get('http://localhost:8000/apprvoed-applicants', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  'Content-Type': 'application/json',
                },
              });
          
              setapplicant(Array.isArray(response.data) ? response.data : []);

            } catch (error) {
              console.error('Error fetching data:', error);
              // setApplicant([]);  // Ensure applicants is an empty array on error
            }
          };
                  
        fetchApplicant();
    }, []);

    const openModal = async (userId) => {
      setIsLoading(true);
      try {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          console.error('Token not found');
          return;
        }
  
        const response = await axios.get(`http://localhost:8000/applicant/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        });
  
        setSelectedDetails(response.data);
        setModalIsOpen(true);
      } catch (error) {
        console.error('Error fetching applicant details:', error);
        // Optionally, display an error message to the user
      } finally {
        setIsLoading(false);
      }
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
      setSelectedDetails(null);
    };

    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentItems = applicant.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(applicant.length / itemsPerPages);

    const handlePageChange = (newPage) => {
      if(newPage < 1 || newPage > totalPages) return;
      setCurrentPage(newPage);
    };

    // const handlePageChange4 = (newPage1) => {
    //     setCurrentPage(newPage1);
    // };

    // const handleStatusChange = (id, newStatus) => {
    //     const updateaplicant = applicant.map((apct) => 
    //       apct.application_id === id ? { ...apct, status: newStatus } : apct
    //     );
    //     setapplicant(updateaplicant);
    // };
    const navigate = useNavigate();

    const handleNavigate = (path) => {
    navigate(path);
    };

  return (

    <div className='content00'>
            <div className='content01'>
                <a href="" className='content011' onClick={() => handleNavigate('/VisaRejected')}>rejected visa</a>
                <a href="" className='content011'onClick={() => handleNavigate('/VisaRequested')}>requested visa</a>
                <a href="" className='content011'onClick={() => handleNavigate('/VisaApproved')}>approved visa</a>
            </div>

            <div className="container6">
                <div className="title6">
                    <p className="title-para6">{props.title}</p>
                </div>
                <div className="table-div2">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Applicant ID</StyledTableCell>
                                    <StyledTableCell align="center">Applicant Name</StyledTableCell>
                                    <StyledTableCell align="center">Risky</StyledTableCell>
                                    <StyledTableCell align="center">Download Document</StyledTableCell>
                                    <StyledTableCell align="center">Action</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentItems.map((applicant) => (
                                    <StyledTableRow key={applicant.user_id}>
                                        <StyledTableCell align="center">{applicant.user_id}</StyledTableCell>
                                        <StyledTableCell align="center">{`${applicant.firstName} ${applicant.lastName}`}</StyledTableCell>
                                        <StyledTableCell align="center">{applicant.risky_status}</StyledTableCell>
                                        <StyledTableCell align="center">
                                        <button className="more_details_btn" onClick={() => openModal(applicant.user_id)}>View Details</button>
                                            
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                        {applicant.visa_approve_status}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <nav aria-label="Page-navigation">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                  className={`page-link1 ${currentPage === 1 ? 'active-prev' : ''}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  className={`page-item1 ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  <button
                    className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                  className={`page-link1 ${currentPage === totalPages ? 'active-next' : ''}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
          <Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  overlayClassName="ReactModal__Overlay"
  className="ReactModal__Content"
  contentLabel="Applicant Details"
  ariaHideApp={false}
>
  {isLoading ? (
    <div className="modal-loading">
      <p>Loading...</p>
    </div>
  ) : selectedDetails ? (
    <div>
      <div className="modal-header">
        <h3>Applicant Details</h3>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
      </div>

      {/* Image Section */}
      <div className="modal-images">
        <div className="image-container">
          <h4>Passport Image</h4>
          <img
            src={selectedDetails.passportPhoto_url}
            alt="Passport"
            className="passport-image"
          />
        </div>
        <div className="image-container">
          <h4>Current Face Image</h4>
          <img
            src={selectedDetails.bioPagePhoto_url}
            alt="Current Face"
            className="face-image"
          />
        </div>
      </div>

      <div className="modal-body">
  {/* Personal Information */}
  <div className="modal-section">
    <h4>Personal Information</h4>
    <p>
      <strong>Full Name:</strong> {`${selectedDetails.prefix} ${selectedDetails.firstName} ${selectedDetails.middleName} ${selectedDetails.lastName}`}
    </p>
    <p><strong>Date of Birth:</strong> {selectedDetails.dateOfBirth}</p>
    <p><strong>Gender:</strong> {selectedDetails.gender}</p>
    <p><strong>Religion:</strong> {selectedDetails.religion}</p>
    <p><strong>Marital Status:</strong> {selectedDetails.maritalStatus}</p>
    <p><strong>Country of Birth:</strong> {selectedDetails.countryOfBirth}</p>
    <p><strong>City of Birth:</strong> {selectedDetails.cityOfBirth}</p>
  </div>

  {/* Contact Information */}
  <div className="modal-section">
    <h4>Contact Information</h4>
    <p><strong>Present Address:</strong> {selectedDetails.presentAddress}</p>
    <p><strong>Country of Residence:</strong> {selectedDetails.countryOfResidence}</p>
    <p><strong>Postal Code:</strong> {selectedDetails.postalCode}</p>
    <p><strong>Mobile Number:</strong> {selectedDetails.mobileNumber}</p>
    <p><strong>Email:</strong> {selectedDetails.email}</p>
  </div>

  {/* Education and Employment */}
  <div className="modal-section">
    <h4>Education and Employment</h4>
    <p><strong>Education Level:</strong> {selectedDetails.educationLevel}</p>
    <p><strong>Field of Study:</strong> {selectedDetails.fieldOfStudy}</p>
    <p><strong>Occupation:</strong> {selectedDetails.occupation}</p>
    <p><strong>Company Name:</strong> {selectedDetails.companyName}</p>
    <p><strong>Company Address:</strong> {selectedDetails.companyAddress}</p>
  </div>

  {/* Parental Information */}
  <div className="modal-section">
    <h4>Parental Information</h4>
    <p><strong>Father's Name:</strong> {selectedDetails.fathersName}</p>
    <p><strong>Father's Country of Birth:</strong> {selectedDetails.fathersCountryOfBirth}</p>
    <p><strong>Father's Nationality:</strong> {selectedDetails.fathersNationality}</p>
    <p><strong>Mother's Name:</strong> {selectedDetails.mothersName}</p>
    <p><strong>Mother's Country of Birth:</strong> {selectedDetails.mothersCountryOfBirth}</p>
    <p><strong>Mother's Nationality:</strong> {selectedDetails.mothersNationality}</p>
  </div>

  {/* Passport and Travel Information */}
  <div className="modal-section">
    <h4>Passport and Travel Information</h4>
    <p><strong>Passport Type:</strong> {selectedDetails.passportType}</p>
    <p><strong>Issuing Country:</strong> {selectedDetails.issuingCountry}</p>
    <p><strong>Nationality:</strong> {selectedDetails.nationality}</p>
    <p><strong>Passport Number:</strong> {selectedDetails.passportNumber}</p>
    <p><strong>Place of Issue:</strong> {selectedDetails.placeOfIssue}</p>
    <p><strong>Date of Issue:</strong> {selectedDetails.dateOfIssue}</p>
    <p><strong>Date of Expiry:</strong> {selectedDetails.dateOfExpire}</p>
    <p><strong>Nationality Acquisition:</strong> {selectedDetails.nationalityAcquisition}</p>
    <p><strong>Port of Entry:</strong> {selectedDetails.portOfEntry}</p>
    <p><strong>Port of Departure:</strong> {selectedDetails.portOfDeparture}</p>
    <p><strong>Visiting Cities:</strong> {selectedDetails.visitingCities}</p>
    <p><strong>Expected Arrival Date:</strong> {selectedDetails.expectedArrivalDate}</p>
    <p><strong>Expected Departure Date:</strong> {selectedDetails.expectedDepartureDate}</p>
  </div>

  {/* Emergency Contact Information */}
  <div className="modal-section">
    <h4>Emergency Contact Information</h4>
    <p><strong>Emergency Contact Name:</strong> {selectedDetails.emergencyContactName}</p>
    <p><strong>Emergency Address:</strong> {selectedDetails.emergencyAddress}</p>
    <p><strong>Emergency Mobile Number:</strong> {selectedDetails.emergencyMobileNumber}</p>
  </div>

  {/* Travel History */}
  <div className="modal-section">
    <h4>Travel History</h4>
    <p><strong>Travel History:</strong> {selectedDetails.travelHistory}</p>
  </div>
</div>

    </div>
  ) : (
    <div className="modal-error">
      <p>Unable to load applicant details.</p>
    </div>
  )}
</Modal>
                </div>
            </div>
        </div>
    );
}

export default VisaApproveTable;
