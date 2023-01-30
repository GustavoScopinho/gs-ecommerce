export interface IProduct {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
  quantity: number
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

export interface arrayProduct {
  itemId: number
  itemPrice: number
}

export interface ICartProduct {
  id: number
  quantity: number
}
