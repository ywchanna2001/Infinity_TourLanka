import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CycleCard from './Cards/CycleCard';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 450,
  height: 350,
  padding: theme.spacing(4),
  ...theme.typography.body2,
  textAlign: 'center',
}));

export default function Variants() {
  return (
    <Stack direction="row" spacing={5}>
      <DemoPaper square={false}><CycleCard/> </DemoPaper>
      <DemoPaper square={false}>rounded corners</DemoPaper>
      <DemoPaper square={false}>rounded corners</DemoPaper>
      
    </Stack>
  );
}
