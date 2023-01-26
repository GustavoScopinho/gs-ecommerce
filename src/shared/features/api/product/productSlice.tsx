import { IPagination, IProduct } from '../../../interfaces'
import { apiSlice } from '../../api'

export const productSlice = apiSlice.injectEndpoints({
  endpoints: build => ({
    getAllProducts: build.query<IProduct, IPagination>({
      query: data => ({
        url: '/products?page=1&rows=5&sortBy=id&orderBy=DESC',
        method: 'GET'
        // params: {
        //   page:  ,
        //   rows:  ,
        //   sortBy:  ,
        //   orderBy:   ,

        // }
      })
    })
  }),
  overrideExisting: false
})

export const { useGetAllProductsQuery } = productSlice
