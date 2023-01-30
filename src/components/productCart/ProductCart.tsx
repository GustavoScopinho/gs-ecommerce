import { useDispatch } from 'react-redux'
import {
  Amount,
  AmountContainer,
  Image,
  Price,
  ProductCartContainer,
  Title,
  ButtonAmount,
  RemoveFromCart
} from './ProductCart.styled'

import { useGetAllProductsQuery } from '../../shared/features/api/product/productSlice'
import { IProduct } from '../../shared/interfaces'
import cartSlice from '../../shared/features/api/cart/cartSlice'
import { useAppSelector } from '../../shared/features/app/hooks'

export const ProductCart = () => {
  const { data } = useGetAllProductsQuery({
    page: 1,
    rows: 1,
    sortBy: 'id',
    orderBy: 'DESC'
  })
  const { cartProductIds } = useAppSelector((state: any) => state.cart)
  const { removeFromCart } = cartSlice.actions
  const dispatch = useDispatch()
  const cartProductData = data?.products.filter(product =>
    cartProductIds.includes(product.id)
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
                <p>Qtd:</p>
                <ButtonAmount>
                  <p>-</p> <span>|</span> <p>1</p> <span>|</span> <p>+</p>
                </ButtonAmount>
              </Amount>
            </AmountContainer>
            <Price>
              <strong>{item.price}</strong>
            </Price>
            <RemoveFromCart
              onClick={() =>
                dispatch(
                  removeFromCart({
                    itemId: item.id,
                    itemPrice: Number(item.price)
                  })
                )
              }
            >
              <p>X</p>
            </RemoveFromCart>
          </ProductCartContainer>
        )
      })}
    </>
  )
}
