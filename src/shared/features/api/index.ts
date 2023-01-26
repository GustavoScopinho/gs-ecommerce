import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-challenge-api-frontend.herokuapp.com/api/v1/'
  }),
  endpoints: () => ({})
})

export const apiReducer = apiSlice.reducer
