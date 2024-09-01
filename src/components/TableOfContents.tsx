import { Box, Grid, List, ListItem } from '@mui/material'
import React from 'react'
import { Body1, H1 } from './Typographies'
import { ResponsiveLink } from './ResponsiveLink'

export const TableOfContents = () => {
  return <Grid container flex={'flex'} alignContent={'center'} direction={'column'}>
      <H1 text={"All Stories"}/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection={'column'}
      >
        <Body1 text={"If things were live, this is where I would probably be listing the links to various stories you could read."} />
        <List sx={{ backgroundColor: '#F8EDE3'}}>
          <ListItem>
            <ResponsiveLink target={''} text={'Like this'} />
          </ListItem>
          <ListItem>
            <ResponsiveLink target={''} text={'Or this'} />
          </ListItem>
          <ListItem>
            <ResponsiveLink target={''} text={'Or that one'} />
          </ListItem>
        </List>
        <Body1 text={"But since nothing is ready yet, enjoy this placeholder I guess?"} />
      </Box>
    </Grid>
}