
import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios';

export const usePropertyQuery = ({apiUrl})=>{

// infinite scroll
const getProptest = async ({ pageParam = undefined }) => {
    try {

      //  setTimeout(() => {
      //   const val = 1
      // }, 200000);
      // const res = await axios.get(
      //   `https://kuda-creditclan-api.herokuapp.com/get_properties?page=${pageParam}`)
      // let array = res?.data?.data
    //   return array
      const array = [1,2,3,4,5,6]
      const nextPage = null

      console.log('fetched...', {array, nextPage})
      return  {array, nextPage}
    } catch (error) {
      console.log({ error });
    }
  };

  const {data, fetchNextPage, hasNextPage, isFetchingNextPage, status} = useInfiniteQuery({
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
    status,
  }

  

}