import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    margin-bottom: 1rem;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    value:string;
    handleChange: (value:string) => void
}

export function SearchInputComponent(props : InputProps){
    return (
        <SearchInput 
        onChange={(event) => props.handleChange(event.target.value)}
        {...props} 
        type="text" 
        placeholder="Search..." />
    )
}