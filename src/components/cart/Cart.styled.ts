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
