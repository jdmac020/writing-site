import styled from '@emotion/styled';
import { AppBar, BottomNavigation, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react';

const year = new Date().getFullYear();

export const Footer = () => {
  return <BottomNavigation>
      <Grid container flex={'flex'} width={'35%'} alignItems={'center'} justifyContent={'space-evenly'} color={'white'}>
        <Typography>&copy; {year} Johnathan MacGregor</Typography>
        <WhiteLink href={'mailto:john.macgregor@gmail.com'}>Contact</WhiteLink>
      </Grid>
  </BottomNavigation>;
}

const WhiteLink = styled('a')`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  color: white;
`;