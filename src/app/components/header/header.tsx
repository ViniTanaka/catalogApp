"use client"

import styled from "styled-components"
import { SearchInputComponent } from "./search-input"
import { CartControl } from "./cart-control"

interface HeaderProps{

}
const TagHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;
`
export function Header(props: HeaderProps){
    return (
        <TagHeader>
            <SearchInputComponent />
            <CartControl />
        </TagHeader>
    )
}