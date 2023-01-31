import { createSlice } from '@reduxjs/toolkit'
import { ICartProduct, CartState } from '../../../interfaces'

const initialState: CartState = {
  cartProductIds: [],
  totalPrice: 0,
  quantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, { payload }) => {
      const isInCart = state.cartProductIds.some(
        (i: ICartProduct) => i.id === payload.itemId
      )
      if (!isInCart) {
        state.cartProductIds = [
          { id: payload.itemId, quantity: 1 },
          ...state.cartProductIds
        ]
        state.totalPrice += Number(payload.itemPrice)
      } else {
        state.cartProductIds = state.cartProductIds.map(
          (item: ICartProduct) => {
            if (item.id === payload.itemId) {
              item.quantity += 1
              state.totalPrice += Number(payload.itemPrice)
            }
            return item
          }
        )
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartProductIds.map(item => {
        if (item.id === payload.itemId) {
          state.totalPrice -= Number(item.quantity) * payload.itemPrice
        }
      })
      state.cartProductIds = state.cartProductIds.filter(
        (item: ICartProduct) => {
          return item.id !== payload.itemId
        }
      )
    },
    removeAllCart: state => {
      state.cartProductIds = []
      state.totalPrice = 0
    },
    addQuantity: (state, { payload }) => {
      state.cartProductIds = state.cartProductIds.map(item => {
        if (item.id === payload.itemId) {
          item.quantity += 1
          state.totalPrice += payload.itemPrice
        }
        return item
      })
    },
    removeQuantity: (state, { payload }) => {
      state.cartProductIds = state.cartProductIds.map(item => {
        if (item.quantity > 1) {
          item.quantity -= 1
          state.totalPrice -= payload.itemPrice
        }
        return item
      })
    },
    total: (state, { payload }) => {
      let total = 0
      let quantity = 0

      state.cartProductIds.map(item => {
        quantity += item.quantity
        total += item.quantity * payload.itemPrice
      }),
        (state.quantity = quantity)
      state.totalPrice = total
    }
  }
})

export default cartSlice
