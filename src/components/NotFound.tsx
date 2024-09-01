import { Box, Grid } from '@mui/material'
import React from 'react'
import { Body1, H1 } from './Typographies'
import { ResponsiveLink } from './ResponsiveLink'

export const NotFound = () => {
  return <Grid container flex={'flex'} alignContent={'center'} direction={'column'}>
      <H1 text={"Yikes"}/>
      <Grid item container flex={'flex'} marginTop={'12rem'} direction={'column'} justifyContent={'center'} textAlign={'center'}>
        <Body1 text={"We have no idea what or where that page is."}/>
        <Body1 text={"Perhaps you'd like to go home and try again?"} />
        <Grid item container justifyContent={'center'} direction={'row'}>
          <Box sx={{ backgroundColor: 'white'}} width={'10%'}>
            <ResponsiveLink target={'/'} text={"HOME"} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
}