"use client"
import { ReactNode, createContext, useState } from "react";
import { FilterType } from "../types/filter-typex";

export const filterContext = createContext({
    search: "",
    page:0,
    type: FilterType.ALL,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {}
})

interface ProviderProps{
    children:ReactNode
}
export function FilterContextProvider({children}:ProviderProps){
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    return (
        <filterContext.Provider value={{search, setSearch, page, setPage, type, setType}}>
            {children}
        </filterContext.Provider>
    )
}