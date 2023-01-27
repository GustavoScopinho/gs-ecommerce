import {
  Box,
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
import { IPagination, IProduct } from '../../shared/interfaces/index'
import { useEffect } from 'react'

export const Product = () => {
  const { data } = useGetAllProductsQuery({
    page: 1,
    rows: 1,
    sortBy: 'id',
    orderBy: 'DESC'
  })

  let Products = data?.products

  return (
    <>
      {Products?.map((item: any) => {
        return (
          <ContainerProduct key={item.id}>
            <ContainerImagem>
              <img src={item.photo} alt="" />
            </ContainerImagem>
            <Box>
              <ContainerTitle>
                <p>{item.name}</p>
              </ContainerTitle>
              <Price>
                <p>R${item.price}</p>
              </Price>
            </Box>
            <Description>{item.description}</Description>
            <Buy>
              <img src={IconBuy} alt="" />
              <p>COMPRAR</p>
            </Buy>
          </ContainerProduct>
        )
      })}
    </>
  )
}
