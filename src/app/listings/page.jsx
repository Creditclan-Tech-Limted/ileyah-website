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
import Link from 'next/link'

const image1 = `https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/1.jpg`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  const [isGridView, setIsGridView] = useState(true)

  const img = [
    `https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/1.jpg`,
    'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg',
    'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/3.jpg',
    'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/4.jpg',
    'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/5.jpg',
    'https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/6.jpg'
  ]

  const [scrollTop, setScrollTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [call, setCall] = useState(false)

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

  useEffect(() => {
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
      <div className='grid grid-cols-[1fr_370px] gap-10 container  mt-[150px]'>
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
          {isGridView ? (
            <div className='grid grid-cols-2 gap-10'>
              {[0, 1, 2, 3, 4, 5].map((m, i) => (
                <Link key={i} href='/listings/page_details'>
                  <ListingsGrid
                    key={i}
                    houseImg={img[i]}
                    heading='For Rent'
                    price='240,900/Month'
                    title='New Apartment Nice View'
                    avatar={imageAvatar}
                    name='Jonathan Reinink'
                    role='Estate Agents'
                    location='Premier View, Victoria Island, Lagos'
                    lengthNum='3450'
                    bedNum='3'
                    bathNum='2'
                    bed='Bed'
                    bath='Bath'
                    length='Square Ft'
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className=''>
              {[0, 1, 2, 3, 4, 5].map((m, i) => (
                <Link key={i} href='/listings/page_details'>
                  <ListingFlex
                    key={i}
                    houseImg={img[i]}
                    heading='For Rent'
                    price='240,900/Month'
                    title='New Apartment Nice View'
                    avatar={imageAvatar}
                    name='Tobi Osunmade'
                    role='Estate Agents'
                    location='Premier View, Victoria Island, Lagos'
                    lengthNum='3450'
                    bedNum='3'
                    bathNum='2'
                    bed='Bed'
                    bath='Bath'
                    length='Square Ft'
                  />
                </Link>

              ))}
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <div className=''>
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
        </div>
      </div>
      <Explore />
      <div className='pt-24'>
        <Footer />
      </div>
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </div>
  )
}

export default Page
