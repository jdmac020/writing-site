import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { lightThemeColors, theme } from '../style';
import { NavBar } from './NavBar';
import pageBackground from '../assets/background.jpg';
import styled from '@emotion/styled';
import { Footer } from './Footer';

export const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container sx={{height: '100%', width: '80%' }}>
        <GridWithBackground 
          container
          justifySelf={'center'}
          justifyContent={'center'}
          sx={{ height: '100%'}}>
          <Outlet />
        </GridWithBackground>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

const GridWithBackground = styled(Grid)`
  height: 100%;
  width: 100%;
  background-image: url(${pageBackground});
  background-position: center; 
`
