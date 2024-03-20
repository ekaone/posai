export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  isActive?: boolean
}

export interface ProductItem {
  title: string
  description: string
  price: number
  image?: string
  currency?: string
  href?: string
  isActive?: boolean
  isFavorite?: boolean
}
