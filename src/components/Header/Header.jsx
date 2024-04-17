import { useState, useEffect } from 'react'
import MenuAppBar from './HeaderItems/HeaderRespo'
import Profiles from './HeaderItems/Profiles'
import MenuMain from './HeaderItems/MenuMain'
import Logo from './HeaderItems/Logo'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

function Header() {

  const [statusRespo, setStatusRespo] = useState(true)

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 700) {
        setStatusRespo(false)
      } else {
        setStatusRespo(true)
      }
    })
  }, [])

  return (
    <Container maxWidth="xl">
      {statusRespo ?
        <Box sx={{ width: '100%', height: '56px', margin: '0 auto', display: 'flex', alignItems: 'center' }} >
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Logo fz='20px' />
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <MenuMain status={false}/>
              <Profiles />
            </Box>
          </Box>
        </Box>
        :
        <MenuAppBar />}
    </Container>
  )
}

export default Header
