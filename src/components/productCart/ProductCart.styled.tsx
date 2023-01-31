import styled from 'styled-components'

export const ProductCartContainer = styled.div`
  width: 379px;
  height: 95px;
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    width: 250px;
    height: 220px;
    flex-wrap: wrap;
    position: relative;
  }
`
export const Image = styled.div`
  padding-right: 20px;

  img {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 700px) {
    img {
      width: 100px;
      height: 90px;
    }
  }
`
export const Title = styled.p`
  width: 40%;
  font-size: 18px;

  @media (max-width: 700px) {
    width: 90%;
  }
`
export const AmountContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`
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

  @media (max-width: 700px) {
    width: 97px;
    height: 34px;
  }
`
export const Amount = styled.div`
  p {
    font-size: 10px;
  }

  @media (max-width: 700px) {
    margin-left: 35px;

    p {
      padding: 0px 5px;
      font-size: 20px !important;
      font-weight: 400;
    }
  }
`

export const TextQuantity = styled.span`
  font-size: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 14px;
  padding: 0px 8px;

  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(55, 55, 55, 1);
    width: 84px;
    height: 35px;
    color: #fff;
    font-size: 15px;
    padding: 0;
    margin: 0px 12px 11px 30px;
  }
`
export const RemoveFromCart = styled.button`
  background-color: #000;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -5px;
  right: -5px;

  @media (max-width: 700px) {
    background-color: #fff;
    position: absolute;
    top: 15px;
    right: 15px;
    p {
      color: #000;
      font-size: 35px;
    }
  }
`
export const ButtonQuantity = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    padding: 0px 5px;
    font-size: 22px;
    font-weight: 400;
  }
`
