import { IPagination, IProducts } from '../../../interfaces'
import { apiSlice } from '../../api'

export const productSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getAllProducts: build.query<IProducts | undefined, IPagination>({
      query: () => ({
        url: '/products?page=1&rows=8&sortBy=id&orderBy=DESC',
        method: 'GET'
      })
    })
  }),
  overrideExisting: false
})

export const { useGetAllProductsQuery } = productSlice
