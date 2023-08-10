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

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  const [isGridView, setIsGridView] = useState(true)

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

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <div className='flex container justify-between mt-[150px]'>
        <div className=''>
          <div className='my-2 flex items-center'>
            <div className='flex gap-4'>
              <IconLayoutGrid size={35} onClick={toggleView} className={isGridView ? 'text-blue-700' : 'text-black'} />
              <IconLayoutList size={35} onClick={toggleView} className={!isGridView ? 'text-blue-700' : 'text-black'} />
            </div>
            <div className='flex gap-4 px-4'>
              <DropdownSearch options='Sort by new arrivals' />
              <DropdownSearch options='Per page:' />
            </div>
          </div>
          <SearchBar placeholder='Search your key word...' />
          {isGridView ? (
            <div className='grid grid-cols-2 gap-4'>
              {[0, 1, 2, 3].map((m, i) => (
                <ListingsGrid
                key={i}
                  houseImg={image1}
                  heading='For Rent'
                  price='$34,900/Month'
                  title='New Apartment Nice View'
                  avatar={imageAvatar}
                  name='Jonathan Reinink'
                  role='Estate Agents'
                  location=' Belmore Garden, Chicago'
                  lengthNum='3450'
                  bedNum='3'
                  bathNum='2'
                  bed='Bed'
                  bath='Bath'
                  length='Square Ft'
                />
              ))}
            </div>
          ) : (
            <div className=''>
              {[0, 1, 2, 3].map((m, i) => (
                <ListingFlex
                key={i}
                  houseImg={image1}
                  heading='For Rent'
                  price='$34,900/Month'
                  title='New Apartment Nice View'
                  avatar={imageAvatar}
                  name='Jonathan Reinink'
                  role='Estate Agents'
                  location=' Belmore Garden, Chicago'
                  lengthNum='3450'
                  bedNum='3'
                  bathNum='2'
                  bed='Bed'
                  bath='Bath'
                  length='Square Ft'
                />
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
          <p className='text-gray-500 space-y-5'>about 8898 result (in 10 seconds)</p>
          <div className='bg-white border-2'>
            <IndexPage
              title='Property Type'
              label='Check this box'
              value='2000'
            />
            <IndexPage title='Amenities' label='Check this box' value='2000' />
            <IndexPage
              title='Price Renge'
              label='Check this box'
              value='2000'
            />

            <PriceRangeSlider
              title='Filter By Price'
              minAmount={10}
              maxAmount={300}
            />
            <IndexPage title='Bed/Bath' label='Check this box' value='2000' />
            <IndexPage title='Catagory' label='Check this box' value='2000' />
          </div>
        </div>
      </div>
      <Explore />
      <ScrollToTopBtn scrollTop={scrollTop} handleScrollTop={handleScrollTop} />
    </div>
  )
}

export default Page
