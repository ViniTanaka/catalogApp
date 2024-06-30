"use client"
import styled from "styled-components"
import { BackBtn } from './../components/back-button';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {  ProductInCart } from "../types/product";
import { CartItem } from "../components/cart/cart-item";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    max-height: 100vh;
    max-width: 100vw;
    overflow: auto;
    position:relative;
    gap:32px;
`
const CartListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const CartList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem;
`
const InfoList = styled.div`
    position: absolute;
    left: 5vw;
    top:10vh;
    
`

const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background:white;
    height:100vh;
    width: 15vw;
    padding: 10px;
`
const BtnCheckout = styled.button`
    background: #115D8C;
    width: 100%;
    mix-blend-mode: multiply;
    border-radius: 4px;
    color: white;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
`
export default function CartPage() {
    const { value, updateLocalStorage }= useLocalStorage<ProductInCart[]>('cart-items', [])

    const calculateTotal = (value:ProductInCart[]) => {
        return value.reduce((total, product) => total += (product.price * product.quantity), 0)
    }
    const cartTotal = calculateTotal(value)

    const handleUpdateQuantity = (id:number, quantity:number) => {
        const newValue = value.map(product => {
            if(product.id !== id) return product
            return {...product, quantity:quantity}
        })
        updateLocalStorage(newValue)
    }
    const handleDelete = (id:number) => {
        const newValue = value.filter(product => {
            if(product.id !== id) return product
        })
        updateLocalStorage(newValue)
    }
    return (
        <Container>
            <CartListContainer>
                <InfoList>
                    <BackBtn navigate="/"/>
                    <h3>Cart</h3>
                    <p>Total {value.length} products
                        <span> R$ {cartTotal.toFixed(2)}</span>
                    </p>
                </InfoList>
                <CartList>
                    {value.map((product) => 
                    <CartItem 
                        id={product.id}
                        image={product.images}
                        title={product.title} 
                        price={product.price} 
                        description={product.description} 
                        measure={product.measure} 
                        weight={product.weight} 
                        quantity={product.quantity}
                        key={product.id}
                        handleDelete={handleDelete}
                        handleUpdateQuantity={handleUpdateQuantity}
                    />) }
                </CartList>
            </CartListContainer>
            <CartResultContainer>
                <h3>Order Summary</h3>
                <h1>Total: R$ {cartTotal.toFixed(2)}</h1>
                <BtnCheckout>Checkout</BtnCheckout>
            </CartResultContainer>
        </Container>
    )
}