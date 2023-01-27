import React from 'react'
import {
  Amount,
  AmountContainer,
  Image,
  Price,
  ProductCartContainer,
  Title,
  ButtonAmount
} from './ProductCart.styled'
import Imagem from '../../assets/apple-watch.png'
import { Box } from '@mui/system'
import { Button, ButtonGroup } from '@mui/material'

export const ProductCart = () => {
  return (
    <>
      <ProductCartContainer>
        <Image>
          <img src={Imagem} alt="" />
        </Image>
        <Title>
          <p>Apple Watch Series 4 GPS</p>
        </Title>

        <AmountContainer>
          <Amount>
            <p>Qtd:</p>
            <ButtonAmount>
              <p>-</p> <span>|</span> <p>1</p> <span>|</span> <p>+</p>
            </ButtonAmount>
          </Amount>
        </AmountContainer>
        <Price>
          <strong>R$399</strong>
        </Price>
      </ProductCartContainer>
    </>
  )
}
