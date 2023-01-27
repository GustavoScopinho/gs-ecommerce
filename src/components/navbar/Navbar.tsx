import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container, Font, FontSmall } from './Navbar.styled'
import { Cart } from '../cart/Cart'

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
            <Cart />
          </Container>
        </AppBar>
      </Box>
    </>
  )
}
