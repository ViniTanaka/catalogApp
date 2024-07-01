"use client"
import { FilterCategory } from "@/app/types/filter-category"
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
export function FilterBycategory(){
    const {category, setCategory} = useFilter()

    const handleChangecategory = (value : FilterCategory) => {
        setCategory(value)
    }
    return (
        <FilterList>
            <FilterItem selected={category === FilterCategory.ALL} onClick={() => handleChangecategory(FilterCategory.ALL)}>Todos os produtos</FilterItem>
            <FilterItem selected={category === FilterCategory.beauty} onClick={() => handleChangecategory(FilterCategory.beauty)}>beauty</FilterItem>
            <FilterItem selected={category === FilterCategory.fragrances} onClick={() => handleChangecategory(FilterCategory.fragrances)}>fragrances</FilterItem>
            <FilterItem selected={category === FilterCategory.groceries} onClick={() => handleChangecategory(FilterCategory.groceries)}>groceries</FilterItem>
            <FilterItem selected={category === FilterCategory.furniture} onClick={() => handleChangecategory(FilterCategory.furniture)}>furniture</FilterItem>
        </FilterList>
        )
}