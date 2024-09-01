import { Grid } from '@mui/material';
import React from 'react';
import { Body1, H1 } from './Typographies';

export const Home = () => {
  return (
    <Grid container flex={'flex'} alignContent={'center'} direction={'column'}>
      <H1 text={"John's Story Spot"}/>
      <Grid container flex={'flex'}>
        <Body1 text={'Additional content down here'} />
      </Grid>
    </Grid>
  );
}
