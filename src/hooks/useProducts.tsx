import { ProductsFetchResponse } from "@/app/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  return axios.get('https://dummyjson.com/products');
}

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher, 
    queryKey: ['products']
  });

  return {
    data: data?.data.products
  };
}
