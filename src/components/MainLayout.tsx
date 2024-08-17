import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../style';
import { NavBar } from './NavBar';

export const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container maxWidth={'xl'} fixed>
        <Grid container justifyContent={'center'} sx={{ paddingTop: '50px'}}>
          <Outlet />
        </Grid>
      </Container>
    </ThemeProvider>
  );
};