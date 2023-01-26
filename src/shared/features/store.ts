import { configureStore } from '@reduxjs/toolkit'
// import { cartSlice } from './api/cart/cartSlice'
import { apiSlice } from './api'
import { productSlice } from './api/product/productSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  reducer: {
    // cart: cartSlice.reducer
    [productSlice.reducerPath]: productSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productSlice.middleware)
})
setupListeners(store.dispatch)
