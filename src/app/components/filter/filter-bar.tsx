"use client"

import styled from "styled-components";
import { FilterByType } from "./filter-by-type";

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;`

export function FilterBar(props: FilterBarProps) {  
    return (
        <FilterContainer>
            <FilterByType></FilterByType>
        </FilterContainer>

    )
}
