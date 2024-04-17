import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Logo from './Logo'
import Profiles from './Profiles'
import MenuMain from './MenuMain'

export default function MenuAppBar() {
  {/* Handle icon profiles */}
  const [auth, setAuth] = React.useState(true)
  const handleChange = (event) => {
    setAuth(event.target.checked)
  }

  {/* Handle show or hidden menu */}
  const [open, setOpen] = React.useState(false)
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup sx={{ display: 'none' }}>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>

      <AppBar position="static">
        <Toolbar>
          {/* Handle Button menu icon */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer open={open} onClose={toggleDrawer(false)}><MenuMain status={true} /></Drawer>
          </IconButton>

          {/* Handle Button profiles icon */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Logo fz='18px'/>
          </Typography>
          {auth && (
            <Profiles />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}