import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface arrayProduct {
  itemId: number
  itemPrice: number
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartProductIds: [],
    totalPrice: 0
  },
  reducers: {
    addToCart: (state: any, action: PayloadAction<arrayProduct>) => {
      state.cartProductIds = [action.payload.itemId, ...state.cartProductIds]
      state.totalPrice += Number(action.payload.itemPrice)
    },
    removeFromCart: (state: any, action: PayloadAction<arrayProduct>) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload.itemId)
      state.cartProductIds.splice(indexOfId, 1)
      state.totalPrice -= Number(action.payload.itemPrice)
    },
    removeAllCart: (state: any) => {
      state.cartProductIds = []
    }
  }
})

export default cartSlice
