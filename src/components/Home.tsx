import styled from '@emotion/styled';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { lightThemeColors } from '../style';

export const Home = () => {
  return (
    <Grid container flex={'flex'} alignContent={'center'} direction={'column'}>
      <Typography variant={'h1'} textAlign={'center'} width={'100%'} bgcolor={'rgb(223, 211, 195, .5)'}>John's Writing Showcase</Typography>
      <Grid container flex={'flex'}></Grid>
    </Grid>
  );
}
