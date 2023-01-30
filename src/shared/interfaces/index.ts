export interface IProduct {
  id: number | any
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

export interface IProducts {
  count: number
  products: IProduct[]
}

export interface IPagination {
  page: number
  rows: number
  sortBy: string
  orderBy: string
}
