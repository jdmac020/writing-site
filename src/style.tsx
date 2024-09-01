import { createTheme } from '@mui/material/styles';

export const lightThemeColors = {
  text: '#C5705D',
  primaryBackground: '#F8EDE3',

}

export const theme = createTheme({
  palette: {
    text: {
      primary: lightThemeColors.text
    },
    primary: {
      main: lightThemeColors.primaryBackground
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: lightThemeColors.text,
          fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
        }
      }
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: lightThemeColors.primaryBackground
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: lightThemeColors.text,
          textDecoration: 'underline',
          ':visited': {
            color: '#D0B8A8'
          }
        }
      }
    }
  }
});