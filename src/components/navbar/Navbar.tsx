import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container, Font, FontSmall } from './Navbar.styled'
import { Cart } from '../cart/Cart'
import { ExistProps } from '../../shared/interfaces'

export const Navbar = (props: ExistProps) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#0f52ba' }}>
          <Container>
            <Toolbar>
              <Font>GS</Font>
              <FontSmall>Informática & Eletrônicos</FontSmall>
            </Toolbar>
            <Cart />
          </Container>
        </AppBar>
      </Box>
    </>
  )
}
