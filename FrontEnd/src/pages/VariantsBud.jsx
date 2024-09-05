import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CycleCard from './Cards/CycleCard';
import RaftingCard from './Cards/RaftingCard';
import SurfCard from './Cards/SurfCard';
import SafariCard from './Cards/SafariCard';
import EcoCard from './CardsBud/EcoCard';
import EssCard from './CardsBud/EssCard';
import CultCard from './CardsBud/CultCard';
import SecCard from './CardsBud/SecCard';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 215,
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor :'White',
}));

export default function VariantsBud() {
  return (
    <Stack direction="row" spacing={5}>
      <DemoPaper square={false}><EssCard></EssCard> </DemoPaper>
      <DemoPaper square={false}><EcoCard></EcoCard> </DemoPaper>
      <DemoPaper square={false}><CultCard></CultCard> </DemoPaper>
      <DemoPaper square={false}><SecCard></SecCard> </DemoPaper>
           
    </Stack>
  );
}
