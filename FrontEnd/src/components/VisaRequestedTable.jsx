import React, { useEffect, useState } from 'react';
import '../styles/visaApprovetable.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import VisaDetailsPdf from './VisaDetailsPdf';
import VisaApproveButton from './VisaApproveButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

function VisaRequestedTable(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [applicant, setapplicant] = useState([]);

    useEffect(() => {
        const fetchApplicant = async () => {
            try {
              const accessToken = localStorage.getItem('access_token');
              if (!accessToken) {
                console.error('Token not found');
                return;
              }
          
              const response = await axios.get('http://localhost:8000/requested-applicants', {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  'Content-Type': 'application/json',
                },
              });
          
              setapplicant(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
              if (error.response && error.response.status === 403) {
                console.error('Unauthorized: Admin access required');
                alert('You are not authorized to view this information. Admin access required.');
              } else if (error.response && error.response.status === 401) {
                console.error('Unauthorized: Invalid or missing token');
                alert('Unauthorized: Please log in again.');
              } else {
                console.error('Error fetching data:', error);
              }
              setapplicant([]);  // Ensure applicants is an empty array on error
            }
          };
                  
        fetchApplicant();
    }, []);
    

    const indexOfLastItem = currentPage * itemsPerPages;
    const indexOfFirstItem = indexOfLastItem - itemsPerPages;
    const currentItems = applicant.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(applicant.length / itemsPerPages);

    const handlePageChange4 = (newPage1) => {
        setCurrentPage(newPage1);
    };

    const handleStatusChange = (id, newStatus) => {
        const updateaplicant = applicant.map((apct) => 
          apct.application_id === id ? { ...apct, status: newStatus } : apct
        );
        setapplicant(updateaplicant);
    };

    const navigate = useNavigate();

    const handleNavigate = (path) => {
    navigate(path);
    };


    return (
        <div className='content00' >
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
                                {currentItems.map((row4) => (
                                    <StyledTableRow key={row4.ID}>
                                        <StyledTableCell align="center">{row4.user_id}</StyledTableCell>
                                        <StyledTableCell align="center">{row4.firstName}&nbsp;{row4.lastName} </StyledTableCell>
                                        <StyledTableCell align="center">{row4.risky_status}</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <VisaDetailsPdf
                                                endpointUrl=""
                                                cvId={row4.personal_info_id}
                                                filename="Employeebill"
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell align="center">
                                            <VisaApproveButton
                                                onStatusChange={handleStatusChange}
                                                id={row4.personal_info_id}
                                                endpointUrl={`http://localhost:5173/update_personal_info_visa_approve_status/${row4.personal_info_id}`}
                                             />
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
                                    onClick={() => handlePageChange4(currentPage - 1)}
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
                                        onClick={() => handlePageChange4(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button
                                    className={`page-link1 ${currentPage === totalPages ? 'active-next' : ''}`}
                                    onClick={() => handlePageChange4(currentPage + 1)}
                                >
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default VisaRequestedTable;
