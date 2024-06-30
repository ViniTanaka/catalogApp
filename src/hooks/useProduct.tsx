import { ProductsFetchResponse } from '@/app/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
const fetcher = (id:number): AxiosPromise<ProductsFetchResponse> => {
    return axios.get('https://dummyjson.com/products/' + id);
  }
export function useProduct(id:number) {
    const {data} = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product', id],
        enabled: !!id
    })
    return {
        data: data?.data.products
    }
}