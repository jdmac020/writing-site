import styled from '@emotion/styled';
import { AppBar, BottomNavigation, Grid, Link, Toolbar, Typography } from '@mui/material'
import React from 'react';

const year = new Date().getFullYear();

export const Footer = () => {
  return <BottomNavigation>
      <Grid container flex={'flex'} width={'35%'} alignItems={'center'} justifyContent={'space-evenly'} color={'white'}>
        <Typography>&copy; {year} Johnathan MacGregor</Typography>
        <Link href={'mailto:john.macgregor@gmail.com'}>Contact</Link>
      </Grid>
  </BottomNavigation>;
}
