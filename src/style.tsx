import { createTheme } from '@mui/material/styles';

// this isn't actually doing anything for me -- but I'm being lazy and want the example in code
export const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between'
        }
      }
    }
  }
});