"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartCount = styled.div`
    position: absolute;
    border-radius: 100%;
    padding: 3px 6px;
    font-size: 10px;
    background-color: white;
    color: red;
    margin-left: 15px;
    margin-top: -20px;
    font-weight: bolder;
`;

const Container = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    button {
        position: relative;
        background: transparent;
        border: none;
        cursor: pointer;
        svg {
            width: 30px;
            height: 30px;
        }
    }
`;

export function CartControl() {
    const [cartItems, setCartItems] = useState([]);
    const { value } = useLocalStorage('cart-items', []);
    const router = useRouter();

    useEffect(() => {
        setCartItems(value);
    }, [value]);

    useEffect(() => {
        const handleStorageChange = (event:any) => {
            if (event.detail.key === 'cart-items') {
                setCartItems(event.detail.value);
            }
        };

        window.addEventListener('localStorageChange', handleStorageChange);
        return () => {
            window.removeEventListener('localStorageChange', handleStorageChange);
        };
    }, []);

    const handleNavigate = () => {
        router.push("/cart");
    };

    return (
        <Container>
            <button onClick={handleNavigate}>
                <FaShoppingCart />
                <CartCount>{cartItems.length}</CartCount>
            </button>
        </Container>
    );
}
