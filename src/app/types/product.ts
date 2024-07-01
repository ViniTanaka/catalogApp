export interface Product {
    description: string
    id: number
    images: string
    title: string
    price: number
    measure: string
    weight: number
}

export interface ProductInCart extends Product {
    quantity: number
}