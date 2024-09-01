import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo825x638.png';
import styled from '@emotion/styled';

export const NavBar = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} wrap={'nowrap'}>
          <Grid container flex={'flex'}>
            <ToolbarLogo src={logo} />
            <Typography variant={'h4'} align={'center'}>John's Writing</Typography>
          </Grid>
          <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} alignContent={'center'} width={'40%'}>
            <BolderLink to={"/stories"}>Stories</BolderLink>
            <BolderLink to={'/about'}>About</BolderLink>
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

const ToolbarLogo = styled('img')`
  max-width: 5%;
  margin-right: 2rem;
`