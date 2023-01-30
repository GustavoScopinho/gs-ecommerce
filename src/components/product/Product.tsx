import cartSlice from '../../shared/features/api/cart/cartSlice'
import { useDispatch } from 'react-redux'
import {
  BoxMiddle,
  Buy,
  ContainerImg,
  ContainerProduct,
  ContainerTitle,
  Description,
  Price
} from './Product.styled'

import IconBuy from '../../assets/shopping-bag.png'
import { useGetAllProductsQuery } from '../../shared/features/api/product/productSlice'

import { SkeletonLoading } from '../skeletonLoading/SkeletonLoading'

export const Product = () => {
  const { addToCart } = cartSlice.actions
  const dispatch = useDispatch()

  const { data, isLoading } = useGetAllProductsQuery({
    page: 1,
    rows: 1,
    sortBy: 'id',
    orderBy: 'DESC'
  })

  let Products = data?.products

  return (
    <>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        Products?.map((item: any) => {
          return (
            <ContainerProduct key={item.id}>
              <ContainerImg>
                <img src={item.photo} alt="" />
              </ContainerImg>
              <BoxMiddle>
                <ContainerTitle>
                  <p>{item.name}</p>
                </ContainerTitle>
                <Price>
                  <p>R${item.price}</p>
                </Price>
              </BoxMiddle>
              <Description>{item.description}</Description>

              <Buy
                onClick={() =>
                  dispatch(
                    addToCart({
                      itemId: item.id,
                      itemPrice: Number(item.price),
                      quantity: item.quantity
                    })
                  )
                }
              >
                <img src={IconBuy} alt="" />
                <p>COMPRAR</p>
              </Buy>
            </ContainerProduct>
          )
        })
      )}
    </>
  )
}
