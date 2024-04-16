import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: 'rgba(255, 255, 255, 0.87)',
        secondary: '#242424'
      }
    },
    dark: {
      palette: {
        primary: '#242424',
        secondary: 'rgba(255, 255, 255, 0.87)'
      }
    }
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '6px',
            height: '6px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '6px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'white',
            cursor: 'pointer'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': { borderWidth: '1px' }
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: '0.875rem' }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: '0.875rem' }
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          // Remove border highlighting when focusing
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': { borderWidth: '1px !important' },
          '&.Mui-focused fieldset': { borderWidth: '1px !important' }
        }
      }
    }
  }
})

export default theme