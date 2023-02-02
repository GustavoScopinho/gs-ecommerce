import styled from 'styled-components'
import { Typography } from '@mui/material'

export const ContainerRec = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
`

export const ContainerProduct = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0px;
  gap: 10px;
  padding: 20px 0px;
  border-radius: 8px;

  background-color: #e4e4e4;
`
export const TitleSC = styled(Typography)`
  font-size: 40px !important;
  font-weight: 700 !important;
  padding: 20px 10px;

  @media (max-width: 700px) {
    font-size: 30px !important;
  }
`

export const TotalPriceSC = styled(Typography)`
  font-size: 30px !important;
  font-weight: 700 !important;
  padding: 20px 10px 50px 10px;

  span {
    color: green;
  }
  @media (max-width: 700px) {
    font-size: 30px !important;
  }
`
