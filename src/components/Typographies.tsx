import { Typography } from '@mui/material'
import React from 'react'

export interface TypographyProps {
  text:string;
}

export const H1 = ({text}:TypographyProps) => {
  return <Typography 
    variant={'h1'}
    textAlign={'center'}
    width={'100%'}
    bgcolor={'rgb(223, 211, 195, .7)'}
    marginTop={{ md: '2rem', lg: 'unset'}}
    fontSize={{ md: '4rem', lg: '5rem'}}
  >
  {text}
  </Typography>
}

export const Body1 = ({text}: TypographyProps) => {
  return <Typography fontSize={{ md: '2.25rem', lg: '1.25rem'}} paddingBottom={'1.25rem'}>{text}</Typography>
}