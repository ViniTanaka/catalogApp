import { ProductsFetchResponse } from '@/app/types/products-response';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import 'dotenv/config'

const url =process.env.NEXT_PUBLIC_URL_API as string;
const fetcher = (id:number): AxiosPromise<ProductsFetchResponse> => {
    return axios.get(`${url}/products` + id);
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