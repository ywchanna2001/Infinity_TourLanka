import { useState } from 'react'
import VisaApproveTable from './components/visaApprovetable'
import VisaRejectTable from './components/VisaRejectTable';
import VisaRequestedTable from './components/VisaRequestedTable';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <VisaApproveTable title="Approved Visa" />
      <VisaRejectTable title="Rejected Visa" />
      <VisaRequestedTable title="Requested Visa" />
      
    </div>
  )
}

export default App
