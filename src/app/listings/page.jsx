'use client'
import IndexPage from '@/components/listings/CheckBox'
import ListingFlex from '@/components/listings/ListingFlex'
import ListingsGrid from '@/components/listings/ListingsGrid'
import SearchBar from '@/components/listings/SearchBar'
import React, { useEffect, useState } from 'react'
import DropdownSearch from '../../components/listings/DropdownSearch'
import PriceRangeSlider from '@/components/listings/RangeSlider'
import Explore from '@/components/listings/Explore'
import Pagination from '@/components/listings/pagination'
import Navbar from '@/components/Navbar'
import ScrollToTop from '@/components/ScrollToTop'
import ScrollToTopBtn from '@/components/ScrollToTpBtn'
import { IconLayoutGrid, IconLayoutList } from '@tabler/icons-react'
import Footer from '@/components/Footer'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  const [isGridView, setIsGridView] = useState(true)
  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [call, setCall] = useState(false)
  const [properties, setProperties] = useState([])

  const handleScroll = ((event) => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;
    const middleOfPage = pageHeight / 2;

    setScrollTop(event.target.scrollingElement.scrollTop);

    if (scrollPosition >= middleOfPage) {
      if (call) return
      setCall(true);
      setShowModal(true);
    }
  });

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const getPorperties = async () => {
    try {
      const res = await axios.get('https://kuda-creditclan-api.herokuapp.com/agents/properties')
      console.log(res?.data?.data);
      setProperties(res?.data?.data)
      return res?.data?.data
    } catch (error) {

    }
  }

  const { data, isLoading, error } = useQuery(['properties'], getPorperties);
  console.log({ isLoading, data });
  useEffect(() => {
    // getPorperties()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [call, setCall]);

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

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className='grid gap-10 container mt-[150px]'>
        <div className=''>
          <div className='flex items-center mb-4'>
            <div className='flex gap-4'>
              <IconLayoutGrid
                size={35}
                onClick={toggleView}
                className={isGridView ? 'text-blue-700' : 'text-black'}
              />
              <IconLayoutList
                size={35}
                onClick={toggleView}
                className={!isGridView ? 'text-blue-700' : 'text-black'}
              />
            </div>
            <div className='flex gap-4 px-4'>
              <DropdownSearch options='Sort by new arrivals' />
              <DropdownSearch options='Per page:' />
            </div>
          </div>
          <SearchBar placeholder='Search your key word...' />
          {isLoading && (
            <>
            <div className='grid grid-cols-3 gap-10'>
              <div role="status" className="max-w-sm p-4  rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4 space-x-3">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="max-w-sm p-4  rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4 space-x-3">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="max-w-sm p-4  rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4 space-x-3">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="max-w-sm p-4  rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                <div className="flex items-center mt-4 space-x-3">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                  <div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
            </>
          )}
          {isGridView ? (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
              {properties.map((m, i) => (
                <div key={i}>
                  <ListingsGrid
                    key={i}
                    houseImg={m.images[0]}
                    heading='For Rent'
                    price='240,900/Month'
                    title={m?.name}
                    avatar={imageAvatar}
                    name='Jonathan Reinink'
                    role='Estate Agents'
                    location={m?.address}
                    lengthNum='3450'
                    bedNum='3'
                    bathNum='2'
                    bed='Bed'
                    bath='Bath'
                    length='Square Ft'
                    property={m}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className=''>
              {[0, 1, 2, 3, 4, 5].map((m, i) => (
                <div key={i}>
                  <ListingFlex
                    key={i}
                    houseImg={m.images[0]}
                    heading='For Rent'
                    price='240,900/Month'
                    title={m?.name}
                    avatar={imageAvatar}
                    name='Jonathan Reinink'
                    role='Estate Agents'
                    location={m?.address}
                    lengthNum='3450'
                    bedNum='3'
                    bathNum='2'
                    bed='Bed'
                    bath='Bath'
                    length='Square Ft'
                    property={m}
                  />
                </div>
              ))}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        {/* <div className=''>
          <h1 className='text-3xl font-bold'>Advance Information</h1>
          <p className='text-gray-500 space-y-5'>
            about 8898 result (in 10 seconds)
          </p>
          <div className='bg-white border-2'>
            <div className=''>
              <IndexPage title='Property Type' label='House' value='2000' />
              <IndexPage label='single Family' value='2600' />
              <IndexPage label='Apartment' value='4000' />
              <IndexPage label='Office Villa' value='2900' />
              <IndexPage label='Luxary Home' value='1000' />
              <IndexPage label='Studio' value='500' />
            </div>
            <div className=''>
              <IndexPage title='Amenities' label='Dishwaser' value='4000' />
              <IndexPage label='Floor Covering' value='3000' />
              <IndexPage label='Internet' value='500' />
              <IndexPage label='Build Wardrobes' value='4000' />
              <IndexPage label='Supermarket' value='2000' />
              <IndexPage label='Kids Zone' value='4000' />
            </div>
            <div className=''>
              <IndexPage
                title='Price Renge'
                label='Low Budget'
                value='2000 - 10000'
              />
              <IndexPage label='Meduim' value=' 10000 - 30000' />
              <IndexPage label='High Budget' value='30000 up' />
            </div>

            <PriceRangeSlider
              title='Filter By Price'
              minAmount={10}
              maxAmount={300}
            />
            <div className=''>
              <IndexPage title='Bed/Bath' label='Single' value='2000' />
              <IndexPage label='Double' value='4000' />
              <IndexPage label='Up to 3' value='1500' />
              <IndexPage label='Up to 5' value='1000' />
            </div>
            <div className=''>
              <IndexPage title='Catagory' label='Buying' value='5000' />
              <IndexPage label='Renting' value='4000' />
              <IndexPage label='Selling' value='2000' />
            </div>
          </div>
        </div> */}
      </div>
      <Explore />
      <div className='pt-24'>
        <Footer />
      </div>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </div>
  )
}

export default Page;