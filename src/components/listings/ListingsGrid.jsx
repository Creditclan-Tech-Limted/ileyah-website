import { IconLocation, IconMapPin, IconMapPinFilled } from '@tabler/icons-react'
import React from 'react'

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
  url
}) {
  return (
    <div>
      <div className='max-w-md rounded relative overflow-hidden shadow m-auto mt-4'>
        {url}
        <img
          className='w-full hover:scale-110 transition duration-500 cursor-pointer'
          src={houseImg}
          alt='Sunset in the mountains'
        />
        <div className='absolute z-[9] top-3 left-3 bg-green-600 text-white rounded px-4 py-1'>
          Rent
        </div>
        <div className='px-8 py-6 space-y-3'>
          {/* <p className='text-lg uppercase  text-blue-700 '>{heading}</p> */}
          <div className='text-gray-900 font-bold text-2xl hover:text-blue-700 cursor-pointer'>
            {title}
          </div>
          <div className='flex gap-2 items-center'>
            <IconMapPinFilled size="20"/>
            <p className='text-gray-700 text-base hover:text-blue-700 cursor-pointer'>
              {location}
            </p>
          </div>
          <div className='flex items-center gap-2 text-gray-500 '>
            <p>
              <span className='font-bold text-gray-500'>{bedNum} </span> {bed}
            </p>
            <p>
              <span className='font-bold text-gray-500'>{bathNum} </span> {bath}
            </p>
            <p>
              <span className='font-bold text-gray-500'>{lengthNum}</span>{' '}
              {length}
            </p>
          </div>
        </div>
        <div className='border-t-2 mt-10'>
          <p className='text-lg px-8 font-bold py-6 '>{price}</p>
        </div>
      </div>
    </div>
  )
}