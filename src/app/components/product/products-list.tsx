"use client"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

interface ProductsListProps{

}

const DivMain = styled.div`
    overflow: hidden;
    width: 80%;
    position: absolute;
    left: 20%;
    bottom: 20%;

    ul {
        list-style: none;
    }
        button {
            display: none;
        }
`

export function ProductList(props: ProductsListProps){
    const {data}= useProducts()
    return (
        <DivMain>
            <Carousel
            autoPlay={false}
            showArrows={false}
            emulateTouch={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            stopOnHover={true}
            axis='vertical'>
            {data?.map(product=>
                <ProductCard 
                    image={product.images[0]} 
                    title={product.title} 
                    price={product.price} 
                    description={product.description} 
                    measure={product.measure} 
                    weight={product.weight} 
                    key={product.id}/>)}
            </Carousel>
        </DivMain>
    )
}