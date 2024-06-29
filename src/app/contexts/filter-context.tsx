"use client"
import { ReactNode, createContext, useState } from "react";
import { FilterCategory } from "../types/filter-category";

export const filterContext = createContext({
    search: "",
    page:0,
    category: FilterCategory.ALL,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setCategory: (value: FilterCategory) => {}
})

interface ProviderProps{
    children:ReactNode
}
export function FilterContextProvider({children}:ProviderProps){
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [category, setCategory] = useState(FilterCategory.ALL)
    return (
        <filterContext.Provider value={{search, setSearch, page, setPage, category, setCategory}}>
            {children}
        </filterContext.Provider>
    )
}