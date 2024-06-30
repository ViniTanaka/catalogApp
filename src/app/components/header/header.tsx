"use client"

import styled from "styled-components"
import { SearchInputComponent } from "./search-input"
import { CartControl } from "./cart-control"
import { useFilter } from "@/hooks/useFilter"

interface HeaderProps{

}
const TagHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem;

`
export function Header(props: HeaderProps){
    const {setSearch, search}= useFilter();

    return (
        <TagHeader>
            <SearchInputComponent 
                value = {search}
                handleChange={setSearch}
            />
                <CartControl />
        </TagHeader>
    )
}