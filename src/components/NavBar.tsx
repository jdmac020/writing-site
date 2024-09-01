import { AppBar, Toolbar, Grid, Typography, Box, Link } from '@mui/material';
import React from 'react';
import logo from '../assets/NoNameLogo825x638.png';
import styled from '@emotion/styled';

export const NavBar = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar sx={{ minHeight: { md: '128px', lg: '64px' }}}>
        <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} wrap={'nowrap'}>{/* mobile height => 95% */}
          <Grid container flex={'flex'} alignItems={'center'}>
            <Box component={'img'} src={logo} sx={{ maxWidth: { xs: '30%', lg: '9%' }, marginRight: { md: '2rem', lg: '6rem' } }}/>
            <Typography variant={'h4'} sx={{ fontSize: { md: '3rem', lg: '2rem' }}}>John's Writing</Typography>
          </Grid>
          <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} alignContent={'center'} width={{ xs: '60%'}}>
            <ResponsiveLink target={'/stories'} text={'Stories'} />
            <ResponsiveLink target={'/about'} text={'About'} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

interface ResponsiveLinkProps {
  target: string;
  text: string;
}

const ResponsiveLink = ({ target, text}: ResponsiveLinkProps) => {
  return <Link href={target} sx={{ fontSize: { md: '2.5rem', lg: '1.5rem' }}}>{text}</Link>
}
