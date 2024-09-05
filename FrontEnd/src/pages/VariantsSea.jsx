import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CycleCard from './Cards/CycleCard';
import RaftingCard from './Cards/RaftingCard';
import SurfCard from './Cards/SurfCard';
import SafariCard from './Cards/SafariCard';
import MonsCard from './SeaCard/MonsCard';
import SummerCard from './SeaCard/SummerCard';
import WinterCard from './SeaCard/WinterCard';
import FestiCard from './CardsCul/FestiCard';
import FestiFeverCard from './SeaCard/FestiFeverCard';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 215,
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor :'White',
}));

export default function VariantsSea() {
  return (
    <Stack direction="row" spacing={5}>
      <DemoPaper square={false}><MonsCard></MonsCard> </DemoPaper>
      <DemoPaper square={false}><SummerCard></SummerCard> </DemoPaper>
      <DemoPaper square={false}><WinterCard></WinterCard> </DemoPaper>
      <DemoPaper square={false}><FestiFeverCard></FestiFeverCard> </DemoPaper>
           
    </Stack>
  );
}
