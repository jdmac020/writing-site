import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import styled from '@emotion/styled';

export const NavBar = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar>
        <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} wrap={'nowrap'}>
          <Typography variant={'h4'} align={'center'}>John's Writing</Typography>
          <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'} width={'60%'}>
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
  font-size: 2.125rem;
  letter-spacing: 0.00735em;
  line-height: 1.235;
`