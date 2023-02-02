import { useAppSelector } from '../../shared/features/app/hooks'
import { ProductCart } from '../productCart/ProductCart'
import {
  ContainerProduct,
  ContainerRec,
  TitleSC,
  TotalPriceSC
} from './ReceiptContent.styled'

export const ReceiptContent = () => {
  const { totalPrice } = useAppSelector(state => state.cart)

  return (
    <>
      <ContainerRec>
        <TitleSC>Agradecemos pela sua compra!</TitleSC>
        <ContainerProduct>
          <ProductCart exist={'none'} />
        </ContainerProduct>
        <TotalPriceSC>
          Total: <span>R${totalPrice}</span>
        </TotalPriceSC>
      </ContainerRec>
    </>
  )
}
