import { AppBar, Toolbar, Grid, Typography, Box, Link } from '@mui/material';
import React from 'react';
import logo from '../assets/NoNameLogo825x638.png';
import styled from '@emotion/styled';

export const NavBar = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} wrap={'nowrap'}>
          <Grid container flex={'flex'} alignItems={'center'}>
            <Box component={'img'} src={logo} sx={{ maxWidth: { xs: '10%', lg: '8%' }, marginRight: '2rem' }}/>
            <Typography variant={'h4'}>John's Writing</Typography>
          </Grid>
          <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} alignContent={'center'} width={'40%'}>
            <BiggerLink href={'/stories'}>Stories</BiggerLink>
            <BiggerLink href={'/about'}>About</BiggerLink>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const BiggerLink = styled(Link)`
  font-size: 1.5rem;
`
