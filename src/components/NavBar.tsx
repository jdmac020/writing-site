import { AppBar, Toolbar, Grid, Typography, Box, Link } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
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
            <Link href={'/stories'}>Stories</Link>
            <Link href={'/about'}>About</Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const BolderLink = styled(NavLink)`
  color: white;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0.00735em;
  line-height: 1.235;
`
