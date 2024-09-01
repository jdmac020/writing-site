import { createTheme } from '@mui/material/styles';

// this isn't actually doing anything for me -- but I'm being lazy and want the example in code
export const theme = createTheme({
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(25, 118, 210)'
        }
      }
    }
  }
});