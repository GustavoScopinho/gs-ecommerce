import { useDispatch } from 'react-redux'
import {
  Amount,
  AmountContainer,
  Image,
  Price,
  ProductCartContainer,
  Title,
  ButtonAmount,
  RemoveFromCart,
  ButtonQuantity,
  TextQuantity
} from './ProductCart.styled'

import { useGetAllProductsQuery } from '../../shared/features/api/product/productSlice'
import { ExistProps, ICartProduct, IProduct } from '../../shared/interfaces'
import cartSlice from '../../shared/features/api/cart/cartSlice'
import { useAppSelector } from '../../shared/features/app/hooks'
import { Typography } from '@mui/material'

export const ProductCart = (props: ExistProps) => {
  const { data } = useGetAllProductsQuery({
    page: 1,
    rows: 1,
    sortBy: 'id',
    orderBy: 'DESC'
  })
  const { cartProductIds } = useAppSelector(state => state.cart)
  const { removeFromCart, addQuantity, removeQuantity } = cartSlice.actions
  const dispatch = useDispatch()

  const cartProductData = data?.products.filter(
    product =>
      cartProductIds.find(productData => productData.id === product.id) !==
      undefined
  )

  return (
    <>
      {cartProductData?.map((item: IProduct) => {
        return (
          <ProductCartContainer key={item.id}>
            <Image>
              <img src={item.photo} alt="" />
            </Image>
            <Title>
              <p>{item.name}</p>
            </Title>

            <AmountContainer>
              <Amount>
                <TextQuantity>Qtd:</TextQuantity>
                <ButtonAmount>
                  <ButtonQuantity
                    style={{ display: `${props.exist}` }}
                    onClick={() =>
                      dispatch(
                        removeQuantity({
                          itemId: item.id,
                          itemPrice: Number(item.price),
                          quantity: Number(item.quantity)
                        })
                      )
                    }
                  >
                    -
                  </ButtonQuantity>
                  <span>|</span>
                  <Typography>
                    {cartProductIds.map((i: ICartProduct) => {
                      if (i.id === item.id) {
                        return i.quantity
                      }
                    })}
                  </Typography>
                  <span>|</span>
                  <ButtonQuantity
                    style={{ display: `${props.exist}` }}
                    onClick={() =>
                      dispatch(
                        addQuantity({
                          itemId: item.id,
                          itemPrice: Number(item.price),
                          quantity: Number(item.quantity)
                        })
                      )
                    }
                  >
                    +
                  </ButtonQuantity>
                </ButtonAmount>
              </Amount>
            </AmountContainer>
            <Price>
              <strong>R${item.price}</strong>
            </Price>
            <RemoveFromCart
              style={{ display: `${props.exist}` }}
              onClick={() =>
                dispatch(
                  removeFromCart({
                    itemId: item.id,
                    itemPrice: Number(item.price),
                    quantity: Number(item.quantity)
                  })
                )
              }
            >
              <Typography>X</Typography>
            </RemoveFromCart>
          </ProductCartContainer>
        )
      })}
    </>
  )
}
