"use client"
import { useProduct } from "@/hooks/useProduct"
import Image from "next/image"
import styled from "styled-components"

interface ProductCardProps{
    images: string,
    id: number,
    title: string,
    price: number,
    description: string,
    measure: string,
    weight: number
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
    h3{
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #000;
    }
    p{
        font-size: 14px;
        font-weight: normal;
        margin-bottom: 1rem;
        color: #000;
    }
`

const ValuesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
    button{
        background: #115D8C;
        mix-blend-mode: multiply;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 0.5rem;
    }
`

const Principal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 80%;
    gap: 30px;
`

export function ProductCard(props: ProductCardProps){
    const handleAddToCart = () => {
        let cartItems = localStorage.getItem('cart-items');
        if (cartItems) {
            let cartItemsArray = JSON.parse(cartItems);
            let existingProductIndex = cartItemsArray.findIndex((item: { id: number }) => item.id === props.id);
            
            if (existingProductIndex !== -1) {
                // If the product already exists in the cart, increase its quantity
                cartItemsArray[existingProductIndex].quantity += 1;
            } else {
                // If the product does not exist in the cart, add it with quantity 1
                cartItemsArray.push({
                    ...props,
                    quantity: 1,
                    id: props.id
                });
            }
    
            localStorage.setItem('cart-items', JSON.stringify(cartItemsArray));
        } else {
            // If there are no items in the cart, create a new cart with the product
            const newCartItem = [
                {
                    ...props,
                    id: props.id,
                    quantity: 1
                }
            ];
            localStorage.setItem('cart-items', JSON.stringify(newCartItem));
        }
    }
    return (
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
                <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
            </ValuesDiv>
            </Card>
    )
}