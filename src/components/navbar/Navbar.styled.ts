import styled from 'styled-components'

export const Container = styled.button`
  height: 101px;
  background-color: #0f52ba;
  display: flex;
  align-items: center;
  color: #fff;
  border: none;
  justify-content: space-between;
  width: 95%;

  @media (max-width: 760px) {
    height: 48px;
  }
`

export const NavButton = styled.button`
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

  @media (max-width: 760px) {
    width: 52px;
    height: 26px;
    font-size: 16px;
  }
`

export const Font = styled.h1`
  font-weight: 600;
  font-size: 40px;
  margin-right: 8px;

  @media (max-width: 760px) {
    font-size: 32px;
  }
`

export const FontSmall = styled.h5`
  font-weight: 300;
  font-size: 20px;
  padding-top: 10px;

  @media (max-width: 760px) {
    font-size: 16px;
  }
`
