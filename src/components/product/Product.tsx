import {
  BoxMiddle,
  Buy,
  ContainerImagem,
  ContainerProduct,
  ContainerTitle,
  Description,
  Price,
  Container
} from './Product.styled'
import ImgHomepod from '../../assets/homepod.png'
import IconBuy from '../../assets/shopping-bag.png'
import { useGetAllProductsQuery } from '../../shared/features/api/product/productSlice'

import { SkeletonLoading } from '../skeletonLoading/SkeletonLoading'

export const Product = () => {
  const { data, isLoading } = useGetAllProductsQuery({
    page: 1,
    rows: 1,
    sortBy: 'id',
    orderBy: 'DESC'
  })

  let Products = data?.products
  console.log(data)

  return (
    <>
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        Products?.map((item: any) => {
          return (
            <ContainerProduct key={item.id}>
              <ContainerImagem>
                <img src={item.photo} alt="" />
              </ContainerImagem>
              <BoxMiddle>
                <ContainerTitle>
                  <p>{item.name}</p>
                </ContainerTitle>
                <Price>
                  <p>R${item.price}</p>
                </Price>
              </BoxMiddle>
              <Description>{item.description}</Description>
              <Buy>
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
