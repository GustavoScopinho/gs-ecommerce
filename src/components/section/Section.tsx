import { Product } from '../product/Product'
import { ContainerSection, Container } from './Section.styled'

export const Section = () => {
  return (
    <>
      <ContainerSection>
        <Container>
          <Product />
        </Container>
      </ContainerSection>
    </>
  )
}
