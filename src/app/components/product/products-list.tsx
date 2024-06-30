"use client"
import { useProducts } from "@/hooks/useProducts"
import { ProductCard } from "./product-card"
import styled from "styled-components"
import { Carousel } from "react-responsive-carousel"

interface ProductsListProps{

}

const DivContainer = styled.div`
    overflow: hidden;
    width: 60%;
    border: 1px solid #ccc;
    background: white;


    ul {
        list-style: none;
    }
        button.control-arrow {
            display: none;
        }
`

export function ProductList(props: ProductsListProps){
    const {data}= useProducts()
    return (
        <DivContainer>
            <Carousel
            autoPlay={false}
            showArrows={false}
            emulateTouch={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            selectedItem={1}
            infiniteLoop={true}
            stopOnHover={true}
            axis='vertical'>
            {data?.map(product=>
                <ProductCard 
                    id={product.id}
                    images={product.images[0]} 
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