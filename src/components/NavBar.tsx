import { AppBar, Toolbar, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export const NavBar = () => {
  return (
    <AppBar position={'static'}>
      <Toolbar sx={{ background: 'white' }}>
        <Grid container justifyContent={'flex-start'} sx={{ marginTop: '.5rem' }}>
          <Link to={'/'}>
            <img src={logo} height={'70'} width={'70'} />
          </Link>
        </Grid>
        <Grid container justifyContent={'space-around'} width={'75%'}>
          <Link to={'/'}>About Me</Link>
          <Link to={'/'}>My Links</Link>
          <Link to={'/'}>Photos</Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};