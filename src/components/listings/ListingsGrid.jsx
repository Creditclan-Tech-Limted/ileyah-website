import { useEffect, useState } from 'react'
import { IconMapPinFilled } from '@tabler/icons-react'
import ProDetails from './modals/property_details'
import { useRouter } from 'next/navigation'
import useSignupStore from '@/store/signup';

export default function ListingsGrid({
  heading,
  price,
  title,
  houseImg,
  location,
  name,
  lengthNum,
  bedNum,
  bathNum,
  bed,
  bath,
  length,
  role,
  avatar,
  url,
  property,
  onClick
}) {

  return (
    <>
      <div className='max-w-md rounded relative overflow-hidden shadow m-auto mt-4 cursor-pointer flex flex-col bg-white' onClick={onClick}>
        <div>
          <img
            className='w-full hover:scale-110 transition duration-500 cursor-pointer h-[200px] object-cover'
            src={houseImg}
            alt='Sunset in the mountains'
          />
          <div className='px-8 py-6 space-y-2'>
            <div className='text-gray-900 font-medium text-xl hover:text-blue-700 cursor-pointer truncate ...'>
              {title}
            </div>
            <div className='flex gap-2 items-center'>
              {/* <IconMapPinFilled size="15" /> */}
              <p className='text-gray-700 text-base hover:text-blue-700 cursor-pointer'>
                {location}
              </p>
            </div>
            <div className="flex">
              <p className='text-lg font-bold'>{  price} <span className='text-sm text-gray-400'>monthly</span> </p>
              {/* <p className='ml-auto'>  {property?.createdAt?.slice(0, 10)}</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}