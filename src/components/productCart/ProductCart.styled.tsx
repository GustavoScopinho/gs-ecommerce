import styled from 'styled-components'

export const ProductCartContainer = styled.div`
  width: 379px;
  height: 95px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Image = styled.div`
  padding-right: 20px;

  img {
    width: 80px;
    height: 80px;
  }
`
export const Title = styled.p`
  width: 40%;
`
export const AmountContainer = styled.div``
export const ButtonAmount = styled.div`
  background-color: #fff;
  width: 60px;
  height: 25px;
  border-radius: 4px;
  border: 0.7px solid #bfbfbf;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4px 0px 15px 0px;

  p {
    font-size: 16px !important;
    font-weight: 400;
  }
  span {
    color: #bfbfbf;
    padding: 4px;
    font-size: 14px;
  }
`
export const Amount = styled.div`
  p {
    font-size: 10px;
  }
`
export const Price = styled.div`
  font-weight: 700;
  font-size: 14px;
  padding: 0px 8px;
`
export const RemoveFromCart = styled.button`
  background-color: #000;
  width: 24px;
  height: 20px;
  border-radius: 50%;
  border: none;
  color: #fff;
  cursor: pointer;
  margin: -90px -5px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonQuantity = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`
