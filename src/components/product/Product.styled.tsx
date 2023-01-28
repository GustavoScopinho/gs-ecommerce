import styled from 'styled-components'

export const ContainerProduct = styled.div`
  width: 217.56px;
  height: 275px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  :last-child {
  }
`
export const ContainerImagem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;

  img {
    width: 150px;
    height: 140px;
  }
`
export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  width: 55%;
`
export const Price = styled.div`
  width: 90px;
  background-color: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26px;
  border-radius: 5px;

  p {
    color: #fff;
    font-weight: 700;
    font-size: 15px;
  }
`
export const BoxMiddle = styled.div`
  padding: 0px 6px;
  display: flex;
  height: 40px;

  align-items: center;
`
export const Description = styled.div`
  width: 90%;
  height: 48px;
  padding: 10px 10px 5px 10px;
  font-weight: 300;
  font-size: 10px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Buy = styled.div`
  width: 100%;
  height: 31.91px;
  background-color: #0f52ba;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  p {
    font-size: 14px;
  }
`
export const Container = styled.div`
  /* padding-bottom: 20px; */
`
