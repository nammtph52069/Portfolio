import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 255, 255, 0.87)'
    },
    secondary: {
      main: '#242424'
    },
    error: {
      main: red.A400
    }
  }
})

export default theme