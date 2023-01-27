import styled from 'styled-components'

export const NavButton = styled.div`
  width: 90px;
  height: 45px;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  color: #000;

  @media (max-width: 760px) {
    width: 52px;
    height: 26px;
    font-size: 16px;
  }

  img {
    @media (max-width: 760px) {
      width: 12px;
      height: 11px;
    }
  }

  strong {
    @media (max-width: 760px) {
      font-size: 12px;
    }
  }
`

export const ContainerDrawer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0f52ba;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TallContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`

export const ContainerText = styled.div`
  color: #fff;
  font-weight: 700;
  width: 45%;
`

export const ButtonClose = styled.div`
  background-color: #000;
  color: #fff;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ContainerProducts = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 90%;
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  p {
    font-weight: 700;
    font-size: 28px;
    color: #fff;
    margin-bottom: 25px;
  }
`

export const Checkout = styled.div`
  width: 100%;
  background-color: #000;
  height: 97px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-weight: 700;
    font-size: 28px;
    color: #fff;
  }
`
