import * as React from 'react'

import { Typography, useMediaQuery, useTheme } from '@mui/material'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import IconCart from '../../assets/icon-cart.png'
import {
  ButtonClose,
  Checkout,
  ContainerDrawer,
  ContainerLow,
  ContainerProducts,
  ContainerText,
  NavButton,
  TallContainer,
  Total
} from './Cart.styled'
import { ProductCart } from '../productCart/ProductCart'

import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../shared/features/app/hooks'
import { ExistProps } from '../../shared/interfaces'

type Anchor = 'right'

export const Cart = (props: ExistProps) => {
  const { cartProductIds, totalPrice } = useAppSelector(state => state.cart)
  const [state, setState] = React.useState({
    right: false
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const theme = useTheme()

  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const navigate = useNavigate()

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: smDown ? '350px' : '480px',
        minHeight: '100%',
        backgroundColor: '#0f52ba'
      }}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ContainerDrawer>
        <TallContainer>
          <ContainerText>
            <Typography sx={{ fontSize: '27px', fontWeight: '700' }}>
              Carrinho de compras
            </Typography>
          </ContainerText>

          <ButtonClose
            data-testid="button"
            onClick={toggleDrawer(anchor, false)}
          >
            X
          </ButtonClose>
        </TallContainer>
        <ContainerProducts>
          <Box>
            <ProductCart />
          </Box>
        </ContainerProducts>
        <ContainerLow>
          <Total>
            <Typography>Total</Typography>
            <Typography>R${totalPrice}</Typography>
          </Total>
          <Checkout>
            <Button
              onClick={() => {
                navigate('/comprovante', { state: { totalPrice } })
              }}
            >
              Finalizar Compra
            </Button>
          </Checkout>
        </ContainerLow>
      </ContainerDrawer>
    </Box>
  )

  return (
    <>
      {(['right'] as const).map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <NavButton>
              <img src={IconCart} /> <strong>{cartProductIds.length}</strong>
            </NavButton>
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  )
}
