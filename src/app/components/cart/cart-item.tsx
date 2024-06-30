"use client"
import { ProductInCart } from "@/app/types/product"
import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"
import { MdDeleteForever } from "react-icons/md";


interface CartItemProps {
    image: string[],
    id: number,
    title: string,
    price: number,
    description: string,
    measure: string,
    weight: number,
    quantity: number
    handleUpdateQuantity(id: number, quantity: number):void
    handleDelete(id: number): void
}
const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    max-width: 800px;
    position:relative;

    button{
        cursor: pointer;
        position:absolute;
        border:none;
        background:transparent;
        svg{
        
            width:20px;
            height:20px;
        }
    }
`
const QuantityInput = styled.input`
width: 50px;
padding: 0.5rem;
margin-right: 1rem;
`;

export function CartItem(props: CartItemProps) {
    const [quantity, setQuantity] = useState(props.quantity);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value =isNaN(parseInt(event.target.value))? 0 : parseInt(event.target.value);
        props.handleUpdateQuantity(props.id,value)
        setQuantity(value)
        if(value === 0 ) props.handleDelete(props.id)
    };
    return (
        <Item>
            <button onClick={() => props.handleDelete(props.id)} aria-label="Delete">
                <MdDeleteForever />
            </button>
            <Image
                    src={String(props.image)}
                    alt={props.title}
                    width={200}
                    height={200}
                    />
            <div>   
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div>
                <QuantityInput
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={handleQuantityChange}
                    />
                    <h3>R$ {props.price }</h3>
                </div>
            </div>
        </Item>
    )
}