import React from 'react';
import { Link } from '@mui/material';

export interface ResponsiveLinkProps {
  target: string;
  text: string;
}

export const ResponsiveLink = ({ target, text}: ResponsiveLinkProps) => {
  return <Link href={target} sx={{ fontSize: { md: '2.5rem', lg: '1.5rem' }}}>{text}</Link>
}