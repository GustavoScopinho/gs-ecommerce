import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { arrayProduct, ICartProduct, IProduct } from '../../../interfaces'

interface CartState {
  cartProductIds: ICartProduct[]
  totalPrice: number
  quantity: number
}
const initialState: CartState = {
  cartProductIds: [],
  totalPrice: 0,
  quantity: 0
}

let quantityProduct = 1

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
    removeFromCart: (state, action: PayloadAction<arrayProduct>) => {
      state.cartProductIds.map(item => {
        if (item.id === action.payload.itemId) {
          state.totalPrice -= item.quantity * action.payload.itemPrice
        }
      })
      state.cartProductIds = state.cartProductIds.filter(
        (item: ICartProduct) => {
          return item.id !== action.payload.itemId
        }
      )
    },
    removeAllCart: (state: any) => {
      state.cartProductIds = []
      state.totalPrice = 0
    },
    addQuantity: (state: any, action: PayloadAction<arrayProduct>) => {
      state.cartProductIds = state.cartProductIds.map((item: any) => {
        if (item.id === action.payload.itemId) {
          item.quantity += 1
          state.totalPrice += action.payload.itemPrice
          quantityProduct = item.quantity
        }
        return item
      })
    },
    removeQuantity: (state: any, action: PayloadAction<arrayProduct>) => {
      state.cartProductIds = state.cartProductIds.map((item: any) => {
        if (item.quantity > 1) {
          item.quantity -= 1
          state.totalPrice -= action.payload.itemPrice
          quantityProduct = item.quantity
        }
        return item
      })
    },
    total: (state, action: PayloadAction<arrayProduct>) => {
      let total = 0
      let quantity = 0

      state.cartProductIds.map(item => {
        quantity += item.quantity
        total += item.quantity * action.payload.itemPrice
      }),
        (state.quantity = quantity)
      state.totalPrice = total
    }
  }
})

export default cartSlice
