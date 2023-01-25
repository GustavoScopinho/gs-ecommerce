import {
  Box,
  Buy,
  ContainerImagem,
  ContainerProduct,
  ContainerTitle,
  Description,
  Price
} from './Product.styled'
import ImgHomepod from '../../assets/homepod.png'
import IconBuy from '../../assets/shopping-bag.png'

export const Product = () => {
  return (
    <>
      <ContainerProduct>
        <ContainerImagem>
          <img src={ImgHomepod} alt="" />
        </ContainerImagem>
        <Box>
          <ContainerTitle>
            <p>Apple Watch Series 4 GPS</p>
          </ContainerTitle>
          <Price>
            <p>R$400</p>
          </Price>
        </Box>
        <Description>
          Redesigned from scratch and completely revised.
        </Description>
        <Buy>
          <img src={IconBuy} alt="" />
          <p>COMPRAR</p>
        </Buy>
      </ContainerProduct>
    </>
  )
}
