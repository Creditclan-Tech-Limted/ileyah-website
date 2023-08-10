'use client'

import React from 'react'
import ImageSlider from '@/components/listings/page_details/ImageSlider'
import ReviewCard from '@/components/listings/page_details/ReviewCard'
import RightHandContainer from '@/components/listings/page_details/RightHandContainer'
import SearchBar from '@/components/listings/SearchBar'
import FeedbackForm from '@/components/listings/page_details/FeedBackForm'
import { IconCalendar, IconCommand, IconMap } from '@tabler/icons-react'
import LeftHandContainer from '@/components/listings/page_details/RightHandContainer'
import LineWithText from '@/components/listings/page_details/LineWithText'
import ListingsGrid from '@/components/listings/ListingsGrid'
import CustomerReview from '@/components/listings/page_details/CustomerReview'
import FactAndFeature from '@/components/listings/page_details/FactAndFeature'
import Gallarey from '@/components/listings/page_details/Gallarey'
import PropertyDetails from '@/components/listings/page_details/PropertyDetails'
import Checkbox from '@/components/listings/page_details/CheckBox'
import ReviewForm from '@/components/listings/page_details/ReviewForm'
import VideoPlayer from '@/components/listings/page_details/VideoPlayer'
// import MapComponent from '@/components/listings/page_details/MapComponent'
import dynamic from 'next/dynamic'
import FloorPlan from '@/components/listings/page_details/FloorPlan'

const Map = dynamic(() => import('@/components/listings/page_details/MapComponent'), { ssr: false })

const image1 = `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80`
const imageAvatar = `https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`
const video1 = `https://www.youtube.com/watch?v=eWUxqVFBq74&t=6s`

const Page = () => {
  return (
    <div className='containe bg-white  mx-auto'>
      <ImageSlider />
      <div className='container grid lg:flex justify-between gap-6 my-6 py-6'>
        <div className=''>
          <div className='container'>
            <div className='flex gap-6 font-semibold '>
              <button className='uppercase text-white py-2 px-3 bg-red-500'>
                featured
              </button>
              <button className='uppercase text-white px-3 py-2 bg-yellow-500'>
                {' '}
                for rent
              </button>
              <div className='flex items-center'>
                <IconCalendar className='text-red-500' />
                <span className='text-gray-600 ml-2'>2021-01-01</span>
              </div>
              <div className='flex items-center'>
                <IconCommand className='text-red-500' />
                <span className='text-gray-600 ml-2'>35 Comment</span>
              </div>
            </div>
            <h1 className='font-bold text-4xl py-3 my-3'>
              Diamond Manor Apartment
            </h1>
            <div className='flex gap-2'>
              <IconMap className='text-red-500' />
              <p className='text-gray-500 font-medium text-md'>
                {' '}
                Belmont Gardens, Chicago
              </p>
            </div>
            <div className=''>
              <LineWithText text='Description' />
              <p>
                Massa tempor nec feugiat nisl pretium. Egestas fringilla
                phasellus faucibus scelerisque eleifend donec Porta nibh
                venenatis cras sed felis eget velit aliquet. Neque volutpat ac
                tincidunt vitae semper quis lectus. Turpis in eu mi bibendum{' '}
              </p>
            </div>
            <div className=''>
              <LineWithText text='Property Detail' />
              <div className='my-8 pb-4'>
                <PropertyDetails />
              </div>
            </div>
            <div className=''>
              <LineWithText text='Facts and Features' />
              <div className='flex gap-4 flex-wrap'>
                <FactAndFeature name='Living Room' size='20 x 16 sq feet' />
                <FactAndFeature name='Bedroom' size='20 x 16 sq feet' />
                <FactAndFeature name='Parking' size='20 x 16 sq feet' />
                <FactAndFeature name='Garden' size='20 x 16 sq feet' />
              </div>
            </div>
            <div className=''>
              <LineWithText text='From Our Gallery' />
              <div className=''>
                <Gallarey />
              </div>
            </div>
            <div className=''>
              <LineWithText text='Amenities' />
              <div className='py-4 grid grid-cols-3'>
                <Checkbox label='Air Condition' />
                <Checkbox label='Gym' />
              </div>
            </div>
            <div className=''>
              <LineWithText text='Location' />
              <div className='py-4'>
                {/* <MapComponent /> */}
                <Map />
              </div>
            </div>
            <div className=''>
              <LineWithText text='Floor Plans' />
              <div className='py-4'>
                <FloorPlan />
              </div>
            </div>
            <div className=''>
              <LineWithText text='Property Video' />
              <div className='py-4'>
                <VideoPlayer videoSrc={video1} />
              </div>
            </div>
            <div className=' py-4'>
              <LineWithText text='Customer Reviews' />
              <div className=''>
                <CustomerReview
                  name='John Doe'
                  avatar={imageAvatar}
                  rating={4.5}
                  review='Excellent service and friendly staff. Highly recommended!'
                  dateOfComment=' September 3, 2020'
                />
                <CustomerReview
                  name='John Doe'
                  avatar={imageAvatar}
                  rating={3.5}
                  review='Excellent service and friendly staff. Highly recommended!'
                  dateOfComment=' September 5, 2021'
                />
              </div>
              <ReviewForm />
            </div>
            <div className=''>
              <LineWithText text='Related Properties' />
              <div className=''>
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
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4 '>
          <ReviewCard
            name='John Doe'
            rating={4.5}
            review='Excellent service and friendly staff. I highly recommend this place.'
            imageUrl={imageAvatar}
            job='Traveller/Photographer'
          />
          <RightHandContainer title={'Search Objects'}>
            <SearchBar placeholder={'Search Key word'} />
          </RightHandContainer>
          <RightHandContainer>
            <div className=''>
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
