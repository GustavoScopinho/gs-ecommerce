import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { arrayProduct, ICartProduct, IProduct } from '../../../interfaces'

interface CartState {
  cartProductIds: ICartProduct[]
  totalPrice: number
}
const initialState: CartState = {
  cartProductIds: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, action: PayloadAction<arrayProduct>) => {
      state.cartProductIds = [
        { id: action.payload.itemId, quantity: 1 },
        ...state.cartProductIds
      ]
      state.totalPrice += Number(action.payload.itemPrice)
    },
    removeFromCart: (state: any, action: PayloadAction<arrayProduct>) => {
      const indexOfId = state.cartProductIds.indexOf(action.payload.itemId)
      state.cartProductIds.splice(indexOfId, state.cartProductIds.quantity)
      state.totalPrice -= Number(action.payload.itemPrice)
    },
    removeAllCart: (state: any) => {
      state.cartProductIds = []
    },
    addQuantity: (state: any, action: PayloadAction<arrayProduct>) => {
      state.cartProductIds = state.cartProductIds.map((item: any) => {
        if (item.id === action.payload.itemId) {
          item.quantity += 1
          state.totalPrice += action.payload.itemPrice
        }
        return item
      })
    },
    removeQuantity: (state: any, action: PayloadAction<arrayProduct>) => {
      state.cartProductIds = state.cartProductIds.map((item: any) => {
        if (item.quantity > 1) {
          item.quantity -= 1
          state.totalPrice -= action.payload.itemPrice
        }
        return item
      })
    }
  }
})

export default cartSlice
