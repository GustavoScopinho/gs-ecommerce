export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

export interface IPagination {
  page: number
  rows: number
  sortBy: string
  orderBy: string
}
