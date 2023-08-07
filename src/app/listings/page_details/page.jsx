'use client'

import React from 'react'
import ImageSlider from '@/components/listings/page_details/ImageSlider'
import ReviewCard from '@/components/listings/page_details/ReviewCard'
import RightHandContainer from '@/components/listings/page_details/RightHandContainer'
import SearchBar from '@/components/listings/SearchBar'
import FeedbackForm from '@/components/listings/page_details/FeedBackForm'

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`


const Page = () => {
  return (
    <div className='containe  mx-auto p-4'>
      {/* <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8'>
        <h1 className='text-3xl font-bold mb-4'>Beautiful Apartment on Rent</h1>
        <img
          src={image1}
          alt='Building'
          className='w-full h-64 object-cover rounded-lg mb-4'
        />
        <div className='text-gray-600 mb-4'>
          <p className='mb-2'>Location: 123 Main Street, City</p>
          <p className='mb-2'>Bedrooms: 3</p>
          <p className='mb-2'>Bathrooms: 2</p>
          <p className='mb-2'>Area: 1500 sq. ft.</p>
        </div>
        <p className='text-gray-700 mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
          euismod mi ac facilisis. Integer in risus eget tellus pellentesque
          vestibulum quis in quam. In hac habitasse platea dictumst. Nullam
          cursus eros in purus sodales feugiat. Morbi tincidunt euismod elit,
          vitae vulputate nibh rhoncus sit amet.
        </p>
        <div className='flex justify-between items-center'>
          <span className='text-2xl font-semibold'>$1200 / month</span>
          <button className='bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'>
            Contact for Rent
          </button>
        </div>
      </div> */}
      <ImageSlider />
      <div className='container flex '>
        <div className=''></div>
        <div className='grid grid-cols-1 gap-4 '>
          <ReviewCard
            name='John Doe'
            rating={4.5}
            review='Excellent service and friendly staff. I highly recommend this place.'
            imageUrl={imageAvatar}
            job='Traveller/Photographer'
          />
          <ReviewCard
            name='Jane Smith'
            rating={5}
            review="The best experience I've had at any establishment. The staff goes above and beyond!"
            imageUrl={imageAvatar}
            job='Traveller'
          />
          <RightHandContainer title={'Search Objects'}>
            <SearchBar placeholder={'Search Key word'} />
          </RightHandContainer>
          <RightHandContainer>
            <div className='flex items-center justify-center flex-col'>
              <div className=' py-4'>
                <h1 className='text-xl border-l-2 border-red-500 font-semibold px-4'>
                  Drop Messege For Book
                </h1>
              </div>
              <FeedbackForm />
            </div>
          </RightHandContainer>
          <RightHandContainer title='Top Rated Product'></RightHandContainer>
          <RightHandContainer title='Top Categories'></RightHandContainer>
          <RightHandContainer title='Popular Properties'></RightHandContainer>
          <RightHandContainer title='Leatest Blogs'></RightHandContainer>
          <RightHandContainer title='Follow Us'></RightHandContainer>
          <RightHandContainer title='Popular Tags'></RightHandContainer>
        </div>
      </div>
    </div>
  )
}

export default Page
