"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useRouter } from "next/navigation"

const CartCount = styled.span`
    position: absolute;
    border-radius: 100%;
    padding: 3px 6px;
    font-size: 10px;

    background-color: white;
    color: red;

    margin-left: -10px;
    margin-top: 10px;
`

const Container = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    button{
        position:relative
        background: transparent;
        border: none;
        cursor: pointer;
        svg{
            width:30px;
            height:30px
        }
    }
`

export function CartControl(){
    const { value } = useLocalStorage('cart-items', [])
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/cart")
    }
    return (
        <Container>
            <button onClick={handleNavigate}>
                <FaShoppingCart />
                {value.length &&<CartCount>{value.length}</CartCount>}
            </button>
        </Container>
    )
}