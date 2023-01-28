import { configureStore } from '@reduxjs/toolkit'

import { productSlice } from './api/product/productSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import cartSlice from './api/cart/cartSlice'

export const store = configureStore({
  reducer: {
    // cart: cartSlice.reducer
    [productSlice.reducerPath]: productSlice.reducer,
    cart: cartSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productSlice.middleware)
})
setupListeners(store.dispatch)
