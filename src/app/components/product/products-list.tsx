"use client"
import { useProducts } from "@/hooks/useProducts"

interface ProductsListProps{

}

export function ProductList(props: ProductsListProps){
    const {data}= useProducts()
    console.log(data)
    return (
        <div></div>
    )
}