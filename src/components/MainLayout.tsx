import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../style';
import { NavBar } from './NavBar';
import pageBackground from '../assets/background.jpg';
import styled from '@emotion/styled';
import { Footer } from './Footer';

export const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth={'xl'} sx={{height: '100%'}}>
        <Grid 
          container
          justifyContent={'center'}
          sx={{ paddingTop: '1rem', height: '100%'}}>
          <Outlet />
        </Grid>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};
