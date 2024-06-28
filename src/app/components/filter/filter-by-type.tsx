"use client"
import { FilterType } from "@/app/types/filter-typex"
import { useFilter } from "@/hooks/useFilter"
import styled from "styled-components"

interface FilterItemProps {
    selected : boolean
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;`

const FilterItem = styled.li<FilterItemProps>`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: ${props => props.selected ? 'bold' : 'normal'};
    margin-bottom: 1rem;
    cursor: pointer;

    border-bottom: ${props => props.selected ? '4px solid' : ''}
    `
export function FilterByType(){
    const {type, setType} = useFilter()

    const handleChangeType = (value: FilterType) => {
        setType(value)
    }
    return (
        <FilterList>
            <FilterItem selected={type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>Todos os produtos</FilterItem>
            <FilterItem selected={type === FilterType.products} onClick={() => handleChangeType(FilterType.products)}>teste1</FilterItem>
            <FilterItem selected={type === FilterType.services} onClick={() => handleChangeType(FilterType.services)}>teste2</FilterItem>
        </FilterList>
        )
}