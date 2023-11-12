

export const usePropertyScroll = ({bottomRef,
    shouldLoadMore,
    loadMore})=>{

 // infinite scroll
  useEffect(() => {
    const bottom = bottomRef?.current;

    const handlePropScroll = ()=>{
     const rect = bottom.getBoundingClientRect()

     let isBottom = rect.bottom <= window.innerHeight + 2000;

       if(isBottom){
         if(shouldLoadMore){ 
           console.log('going for the next page')
           loadMore()
         }
       }
    }
   
    window?.addEventListener("scroll", handlePropScroll)
   return () => {
     window?.removeEventListener("scroll", handlePropScroll);
   }
 }, [shouldLoadMore, loadMore, bottomRef])

}