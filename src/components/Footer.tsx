import { BottomNavigation, Grid, Typography } from '@mui/material'
import React from 'react';
import { ResponsiveLink } from './ResponsiveLink';

const year = new Date().getFullYear();

export const Footer = () => {
  return <BottomNavigation>
      <Grid container flex={'flex'} width={{ md:'100%', lg: '35%' }} alignItems={'center'} justifyContent={'space-evenly'}>
        <Typography sx={{ fontSize: { md: '2.5rem', lg: '1.5rem'}}}>&copy; {year} Johnathan MacGregor</Typography>
        <ResponsiveLink target={'mailto:john.macgregor@gmail.com'} text={'Contact'}></ResponsiveLink>
      </Grid>
  </BottomNavigation>;
}
