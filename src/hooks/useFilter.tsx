import { filterContext } from "@/app/contexts/filter-context";
import { useContext } from "react";


export function useFilter() {
    return useContext(filterContext)
}