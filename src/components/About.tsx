import { Box, Grid, List, ListItem } from '@mui/material'
import React from 'react'
import { Body1, H1 } from './Typographies'
import { ResponsiveLink } from './ResponsiveLink'

export const About = () => {
  return <Grid container flex={'flex'} alignContent={'center'} direction={'column'}>
      <H1 text={"About Me"}/>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        minHeight={'100vh'}
        flexDirection={'column'}
      >
        <Body1 text={"This is where you'd get a lil bio and some links, if the thing was working right."} />
        <Body1 text={"HEY MAKE ME RESPONSIVE"} />
        <Body1 text={"But since nothing is ready yet, enjoy this placeholder I guess?"} />
      </Box>
    </Grid>
}