import { ProductsFetchResponse } from "@/app/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { Card } from "@/app/types/card";
import { CardResponse } from "@/app/types/card-response";


const fetcher = (cardInfo:{cardEncode:string}): AxiosPromise<CardResponse> => {
  return axios.post('http://localhost:8080/api/cards', {
    cardInfo
  });
}
export function useCards(cardInfo:{cardEncode:string}) {
    const {data} = useQuery({
        queryFn: () => fetcher(cardInfo),
        queryKey: ['result'],
    })
    return {
        data: data?.data
    }
}
