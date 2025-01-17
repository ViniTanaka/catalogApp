import { ProductsFetchResponse } from "@/app/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { FilterCategory } from "@/app/types/filter-category";
import { getCategory } from "@/app/utils/get-category";
import { useDeferredValue } from "react";
import 'dotenv/config'


const mountQuery = (category:FilterCategory) => {
   let searchCategory = ''
  if(category === FilterCategory.ALL) {
    return searchCategory
  }
  return searchCategory = `/category/${getCategory(category)}`
}

const url =process.env.NEXT_PUBLIC_URL_API as string;
const fetcher = (category:string): AxiosPromise<ProductsFetchResponse> => {
  return axios.get(`${url}/products` + category);
}
export function useProducts() {
  const {category, search} = useFilter()
  const searchDeferred = useDeferredValue(search)
  const query = mountQuery(category)
  const { data } = useQuery({
    queryFn: () => fetcher(query), 
    queryKey: ['products', category, search]
  });
  const products =  data?.data.products
  const filteredProducts = products?.filter((product) => product.title.toLowerCase().includes(searchDeferred.toLowerCase()))
  return {
    data: filteredProducts
  };
}
