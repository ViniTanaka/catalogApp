import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

interface ProductCardProps {
    images: string;
    id: number;
    title: string;
    price: number;
    description: string;
    measure: string;
    weight: number;
}

const Card = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    img {
        width: 256px;
        height: 300px;
    }

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #000;
    }

    p {
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 1rem;
        color: #000;
    }
`;

const ValuesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;

    button {
        background: #115d8c;
        mix-blend-mode: multiply;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }
`;

const Principal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
    gap: 30px;
`;

const CarouselLi = styled.li`
    scroll-snap-align: center;
    min-height: 35vh;
`
export function ProductCard(props: ProductCardProps) {
    const handleAddToCart = () => {
        try {
            let cartItems = localStorage.getItem('cart-items');
            let cartItemsArray = cartItems ? JSON.parse(cartItems) : [];

            let existingProductIndex = cartItemsArray.findIndex((item: { id: number }) => item.id === props.id);
            
            if (existingProductIndex !== -1) {
                cartItemsArray[existingProductIndex].quantity += 1;
            } else {
                cartItemsArray.push({
                    ...props,
                    quantity: 1,
                    id: props.id
                });
            }
    
            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));

            window.dispatchEvent(new CustomEvent('localStorageChange', {
                detail: { key: 'cart-items', value: cartItemsArray }
            }));
        } catch (error) {
            console.error("Failed to update cart items:", error);
        }
    };

    return (
        <CarouselLi>
            <Card>
                <Image
                    src={props.images}
                    alt={props.title}
                    width={800}
                    height={500}
                />
                <Principal>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </Principal>
                <ValuesDiv>
                    <h3>R$ {props.price}</h3>
                    <p>{props.weight} KG</p>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </ValuesDiv>
            </Card>
        </CarouselLi>
    );
}
