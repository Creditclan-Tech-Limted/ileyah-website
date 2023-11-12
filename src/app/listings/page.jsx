'use client'
import ListingFlex from '@/components/listings/ListingFlex'
import ListingsGrid from '@/components/listings/ListingsGrid'
import React, { useEffect, useRef, useState } from 'react'
import Explore from '@/components/listings/Explore'
import Pagination from '@/components/listings/pagination'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollToTopBtn from '@/components/ScrollToTpBtn'
import Footer from '@/components/Footer'
import axios from 'axios'
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import ProDetails from '@/components/listings/modals/property_details'
import useSignupStore from '@/store/signup'
import Select from '@/global/Select'
import Button from '@/components/global/Button'
import Navbar from './components/Navbar'
import { IconChevronRight, IconLayoutGrid, IconLayoutList, IconListNumbers, IconMoodCry, IconSearch } from '@tabler/icons-react'
import WeCall from '@/components/WeCall'
import PostRequest from './modals/PostRequest'
import { usePropertyQuery } from '@/hooks/use-property-query'

const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  const [isGridView, setIsGridView] = useState(true)
  const [scrollTop, setScrollTop] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [call, setCall] = useState(false)
  const [properties, setProperties] = useState([])
  const [current, setCurrent] = useState()
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false)
  const { data: signupData, updateData } = useSignupStore((state) => state);
  const [loading, setLoading] = useState(true);
  const [openFindHouse, setOpenFindHouse] = useState(false)

  const containerRef = useRef(null)
  const bottomRef = useRef(null)

  const apiUrl = 'https://kuda-creditclan-api.herokuapp.com/get_properties'
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = usePropertyQuery({
    apiUrl,
  });











  const handleScroll = (event) => {
    const scrollPosition = window.innerHeight + window.scrollY
    const pageHeight = document.body.offsetHeight
    const middleOfPage = pageHeight / 2

    setScrollTop(event.target.scrollingElement.scrollTop)

    if (scrollPosition >= middleOfPage) {
      if (call) return
      setCall(true)
      setShowModal(true)
    }
  }

  const handleClose = async () => {
    try {
      setOpenPropertyDetails(false)
    } catch (error) {
      console.log({ error })
    }
  }

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const getPorperties = async () => {
    try {
      const res = await axios.get(
        'https://kuda-creditclan-api.herokuapp.com/get_properties'
      )
      let array = res?.data?.data
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      console.log({ array });
      setProperties(array)
      setLoading(false)
    } catch (error) {
      console.log({ error });
    }
  }
  
// infinite scroll
  useEffect(() => {
     const bottom = bottomRef?.current;

     const handlePropScroll = ()=>{
      const rect = bottom.getBoundingClientRect()
      // console.log(rect.bottom, window.innerHeight, window.scrollY)

      let isBottom = rect.bottom <= window.innerHeight + 2000;

        if(isBottom){
        
          console.log(!isFetchingNextPage, hasNextPage, data)
          if(!isFetchingNextPage && hasNextPage){ 
            console.log('going for the next page')
            fetchNextPage()
          }
        }
     }
    
     window?.addEventListener("scroll", handlePropScroll)
    return () => {
      window?.removeEventListener("scroll", handlePropScroll);
    }
  }, [isFetchingNextPage, hasNextPage, bottomRef])
  








  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [call, setCall])

  const toggleView = () => {
    setIsGridView((prev) => !prev)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5 // Replace with the total number of pages

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // You can perform additional actions here, like fetching data for the selected page.
  }

  const handleClick = () => {
    console.log('Button clicked!')
    // Perform your desired action here
  }

  const checkLegacyRoute = async () => {
    try {
      if (signupData?.property) {
        setCurrent(signupData?.property)
        setOpenPropertyDetails(true)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    getPorperties()
    // checkLegacyRoute()
  }, [])
  return (
    <div className='bg-gray-100'>
      <ScrollToTop />
      <Navbar />
      <div className='grid gap-10 container mt-[10px]'>
        <div className=''>
          {loading && (
            <>
              <div className='grid grid-cols-3 gap-10'>
                {
                  [1, 2, 3, 4].map((m, i) => (
                    <div
                      role='status'
                      className='max-w-sm p-4  rounded shadow animate-pulse md:p-6'
                      key={i}
                    >
                      <div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
                        <svg
                          className='w-10 h-10 text-gray-200 dark:text-gray-600'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 16 20'
                        >
                          <path d='M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z' />
                          <path d='M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z' />
                        </svg>
                      </div>
                      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                      <div className='flex items-center mt-4 space-x-3'>
                        <svg
                          className='w-10 h-10 text-gray-200 dark:text-gray-700'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
                        </svg>
                        <div>
                          <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2'></div>
                          <div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                        </div>
                      </div>
                      <span className='sr-only'>Loading...</span>
                    </div>
                  ))
                }
              </div>
            </>
          )}

          <div className="border-gray-300 border px-8 py-6 bg-blue-900 rounded-2xl text-white space-y-6 navbar_bg2 mt-4 md:hidden">
            <p className='inline-flex'>
              <IconMoodCry className='mr-2' />
              Didn't find what you're looking for?
            </p>
            <Button color='white' size='sm' onClick={() => (
              setCall(true),
              setShowModal(true)
            )} >Post a Request</Button>
          </div>

          {/* <div className="flex space-x-5 cursor-pointer py-6">
            <IconLayoutGrid size={30} onClick={() => setIsGridView(true)} />
            <IconLayoutList size={30} onClick={() => setIsGridView(false)} />
          </div> */}
          <div className={`md:grid md:grid-cols-[1fr_350px] gap-10 mt-10`}>
            {isGridView ? (
              <div  className=' grid md:grid-cols-2 gap-10'>
                {properties.map((m, i) => (
                  <div key={i}>
                    <ListingsGrid
                      index={i}
                      key={i}
                      houseImg={m.image}
                      heading='For Rent'
                      price={m?.price}
                      title={m?.description}
                      avatar={imageAvatar}
                      name='Jonathan Reinink'
                      role='Estate Agents'
                      location={m?.area}
                      lengthNum='3450'
                      bedNum={m?.beds}
                      bathNum={m?.baths}
                      bed='Bed'
                      bath='Bath'
                      length='Square Ft'
                      property={m}
                      onClick={() => {
                        setCurrent(m)
                        setOpenPropertyDetails(true)
                      }}
                    />
                  </div>
                ))}
              <div ref={bottomRef} />
              </div>
            ) : (
              <div className=''>
                {properties.map((m, i) => (
                  <div key={i}>
                    <ListingFlex
                      key={i}
                      index={i}
                      houseImg={m.image}
                      heading='For Rent'
                      price={m?.price}
                      title={m?.description}
                      avatar={imageAvatar}
                      name='Jonathan Reinink'
                      role='Estate Agents'
                      location={m?.address}
                      lengthNum='3450'
                      bedNum={m?.beds}
                      bathNum={m?.baths}
                      bed='Bed'
                      bath='Bath'
                      length='Square Ft'
                      property={m}
                      onClick={() => {
                        setCurrent(m)
                        setOpenPropertyDetails(true)
                      }}
                    />
                  </div>
                ))}
              </div>
            )}

            <div className='hidden md:block'>
              <div className="border-gray-300 border px-8 py-6 bg-blue-900 rounded-2xl text-white space-y-6 navbar_bg2 mt-4">
                <p className='inline-flex'>
                  <IconMoodCry className='mr-2' />
                  Didn't find what you're looking for?
                </p>
                <Button color='white' size='sm' onClick={() => (
                  setCall(true),
                  setShowModal(true)
                )} >Post a Request</Button>
              </div>
              <div className='bg-white rounded-2xl p-10 max-h-[770px] space-y-10 sticky top-[30px] mt-10'>
                <div>
                  <p>House Type</p>
                  <div class='flex items-center my-4'>
                    <input
                      id='default-checkbox'
                      type='checkbox'
                      value=''
                      class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                    />
                    <label for='default-checkbox' class='ml-2 text-base'>
                      Office
                    </label>
                  </div>
                  <div class='flex items-center my-4'>
                    <input
                      id='default-checkbox'
                      type='checkbox'
                      value=''
                      class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                    />
                    <label for='default-checkbox' class='ml-2 text-base'>
                      Studio
                    </label>
                  </div>
                  <div class='flex items-center mb-4'>
                    <input
                      id='default-checkbox'
                      type='checkbox'
                      value=''
                      class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                    />
                    <label for='default-checkbox' class='ml-2 text-base'>
                      One Bedroom
                    </label>
                  </div>
                  <div class='flex items-center mb-4'>
                    <input
                      id='default-checkbox'
                      type='checkbox'
                      value=''
                      class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                    />
                    <label for='default-checkbox' class='ml-2 text-base'>
                      Two Bedroom
                    </label>
                  </div>
                  <div class='flex items-center mb-4'>
                    <input
                      id='default-checkbox'
                      type='checkbox'
                      value=''
                      class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2'
                    />
                    <label for='default-checkbox' class='ml-2 text-base'>
                      Three Bedroom
                    </label>
                  </div>
                </div>

                <div>
                  <p>Amount</p>
                  <div className='w-full my-4'>
                    <Select options={[1, 2, 3, 4, 5, 6]} />
                  </div>
                </div>

                <div>
                  <p>Location</p>
                  <div className='w-full my-4'>
                    <Select options={[1, 2, 3, 4, 5, 6]} />
                  </div>
                </div>

                <Button leftIcon={<IconSearch />}  >Apply Filter</Button>

                <div>
                  <p className='mb-3 italic'>Didn't find your choice property</p>
                  <div className="rounded-2xl flex justify-between items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100" onClick={() => setShowModal(true)}>
                    <div className="flex">
                      <div className="flex">
                        <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center my-auto">
                          <IconListNumbers size="20" />
                        </div>
                      </div>
                      <div className="px-5 my-auto">
                        <p className="text-lg font-medium text-left">
                          Join our waitlist
                        </p>
                      </div>
                    </div>
                    <div>
                      <IconChevronRight className="text-black ml-auto" size="20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Explore />
      <div className='pt-24'>
        <Footer />
      </div>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
      <ProDetails isOpen={openPropertyDetails} onClose={handleClose} property={current} />
      <WeCall isOpen={showModal} onClose={() => setShowModal(false)} />
      <PostRequest isOpen={openFindHouse} onClose={() => setOpenFindHouse(false)} />
    </div>
  )
}

export default Page;