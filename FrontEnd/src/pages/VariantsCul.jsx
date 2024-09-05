import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TempleCard from './CardsCul/TempleCard';
import AntientCard from './CardsCul/AntientCard';
import TeaCard from './CardsCul/TeaCard';
import FestiCard from './CardsCul/FestiCard';


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 250,
  height: 215,
  padding: theme.spacing(1),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor :'White',
}));

export default function VariantsCul() {
  return (
    <Stack direction="row" spacing={5}>
      <DemoPaper square={false}><TempleCard></TempleCard> </DemoPaper>
      <DemoPaper square={false}><AntientCard></AntientCard> </DemoPaper>
      <DemoPaper square={false}> <TeaCard></TeaCard> </DemoPaper>
      <DemoPaper square={false}> <FestiCard></FestiCard> </DemoPaper>
           
    </Stack>
  );
}
