import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

function Logo({ fz }) {
  return (
    <Box>
      <Typography variant="h6" component="div">
        <Link
          href="#"
          color="inherit"
          underline="none"
          sx={{ fontSize: `${fz}` }}
        >
          Thenam
        </Link>
      </Typography>
    </Box>
  )
}

export default Logo
