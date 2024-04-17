import { MenuData } from '~/apis/mockData-menu'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function MenuMain({ status }) {
  const NORESPO = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center'
  }
  const RESPO = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '250px',
    paddingLeft: '36px',
    marginTop: '56px'
  }
  return (
    <Box sx={!status ? NORESPO : RESPO}>
      {MenuData.menu_main.items.map(({ id, name, link }) => (
        <Typography key={id} sx={{ minWidth: 100, cursor: 'pointer' }}>
          <Link
            href={link}
            color="inherit"
            underline="none"
            sx={{ minWidth: 100, fontSize: '16px' }}
          >
            { name }
          </Link>
        </Typography>
      ))}
    </Box>
  )
}

export default MenuMain
