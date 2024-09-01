import styled from '@emotion/styled';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react';

const year = new Date().getFullYear();

export const Footer = () => {
  return <AppBar position={'static'}>
    <Toolbar>
      <Grid container flex={'flex'} direction={'row'} justifyContent={'space-around'}>
        <Grid container direction={'column'}>
          <Typography alignSelf={'center'}>&copy; {year} Johnathan MacGregor</Typography>
          <WhiteLink href={'mailto:john.macgregor@gmail.com'}>Contact</WhiteLink>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>;
}

const WhiteLink = styled('a')`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-align: center;
  color: white;
`;