// import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface InitialState {
//   cartProductIds: [0] | Number[]
// }

// const initialState: InitialState = {
//   cartProductIds: [0]
// }

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<any>) => {
//       state.cartProductIds = [action.payload, ...state.cartProductIds]
//     },
//     removeFromCart: (state, action: PayloadAction<0>) => {
//       const indexOfId = state.cartProductIds.indexOf(action.payload)
//       state.cartProductIds.splice(indexOfId, 1)
//     },
//     clearAllItems: state => {
//       state.cartProductIds = []
//     }
//   }
// })
