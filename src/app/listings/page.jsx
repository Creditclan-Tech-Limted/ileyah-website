'use client'
import IndexPage from '@/components/listings/CheckBox'
import ListingFlex from '@/components/listings/ListingFlex'
import ListingsGrid from '@/components/listings/ListingsGrid'
import SearchBar from '@/components/listings/SearchBar'
import React, { useState } from 'react'
import DropdownSearch from '../../components/listings/DropdownSearch'
import PriceRangeSlider from '@/components/listings/RangeSlider'
import Explore from '@/components/listings/Explore'
import Pagination from '@/components/listings/pagination'

  const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
  const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`

const Page = () => {
  const [isGridView, setIsGridView] = useState(true)

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
      <div className='flex container justify-between  '>
        <div className=''>
          <h1 className='text-3xl font-bold mb-2'>Advance Information</h1>
          <p>about 8898 result (in 10 seconds)</p>
          <div className=' bg-white shadow-xl border-2'>
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

        <div className=''>
          <div className='container  mx-auto px-4 my-2 flex  justify-between items-center'>
            <div className='flex gap-4'>
              <button
                onClick={toggleView}
                className={`mr-2 p-2 rounded-lg ${
                  isGridView ? 'bg-orange-600 text-gray-100' : 'bg-transparent'
                }`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5'
                  />
                </svg>
              </button>
              <button
                onClick={toggleView}
                className={`p-2 rounded-lg ${
                  !isGridView
                    ? 'bg-orange-600 text-gray-100'
                    : 'bg-transparent '
                }`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                  />
                </svg>
              </button>
            </div>
            <div className='container flex gap-4  mx-auto px-4'>
              <DropdownSearch options='Sort by new arrivals' />
              <DropdownSearch options='Per page:' />
            </div>
          </div>
          <SearchBar placeholder='Search your key word...' />
          {isGridView ? (
            <div className='grid grid-cols-2  gap-4'>
              <ListingsGrid
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
              <ListingsGrid
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
            </div>
          ) : (
            <div className=''>
              <ListingFlex
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
              <ListingFlex
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
            </div>
          )}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <Explore />
    </div>
  )
}

export default Page
