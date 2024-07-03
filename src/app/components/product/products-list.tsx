"use client"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"

interface ProductsListProps{

}

const DivContainer = styled.div`
    overflow: hidden;
    width: 60%;
    border: 1px solid #ccc;
    background: white;
    max-height:35vh;
    


    ul {
        list-style: none;
    }
        button.control-arrow {
            display: none;
        }
`
const Carousel = styled.ul`
    width: 100%;
    height: 100%;
    max-height:35vh;

    overflow: auto;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none; /* IE and Edge /
    scrollbar-width: none; / Firefox */

`

export function ProductList(props: ProductsListProps){
    const {data}= useProducts()
    return (
        <DivContainer>
        <Carousel>
            {data?.map(product=>
                <ProductCard 
                    id={product.id}
                    images={product.images} 
                    title={product.title} 
                    price={product.price} 
                    description={product.description} 
                    measure={product.measure} 
                    weight={product.weight} 
                    key={product.id}/>)}
        </Carousel>
        </DivContainer>
    )
}