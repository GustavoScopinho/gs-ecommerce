import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Container, Font, FontSmall, NavButton } from './Navbar.styled'
// import NavButton from './Navbar.styled'
import IconCart from '../../assets/icon-cart.png'

export const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#0f52ba' }}>
          <Container>
            <Toolbar>
              <Font>MKS</Font>
              <FontSmall>Sistemas</FontSmall>
            </Toolbar>
            <NavButton>
              <img src={IconCart} alt="" /> <strong>0</strong>
            </NavButton>
          </Container>
        </AppBar>
      </Box>
    </>
  )
}
