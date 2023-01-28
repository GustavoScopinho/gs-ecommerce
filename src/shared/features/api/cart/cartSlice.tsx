import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: []
  },
  reducers: {
    addToCart: (state: any, action: any) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds]
    },
    removeFromCart: (state: any, action: any) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload)
      state.cartProductIds.splice(indexOfId, 1)
    },
    removeAllCart: (state: any) => {
      state.cartProductIds = []
    }
  }
})

export default cartSlice
