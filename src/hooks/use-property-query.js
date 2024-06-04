
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios';
import { useState } from 'react';

export const usePropertyQuery = ({apiUrl})=>{
const getProptest = async ({ pageParam = undefined }) => {
    try {

      const param = pageParam === false ? undefined : pageParam === undefined ? 1 :  pageParam

      const res = await axios.get(
        `https://kuda-creditclan-api.herokuapp.com/get_properties?page=${param}`)
      
      let array = res?.data?.data
      const nextPage = res?.data?.nextPage
      return  {array, nextPage}
    } catch (error) {
      console.log({ error });
    }
  };

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({
    queryKey: ['getProperty'],
    queryFn: getProptest,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
    refetchInterval: false
  })

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }

  

}