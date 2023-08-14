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
      <div className='max-w-md rounded relative overflow-hidden shadow-lg m-auto mt-4'>
        {url}
        <img
          className='w-full hover:scale-110 transition duration-500 cursor-pointer'
          src={houseImg}
          alt='Sunset in the mountains'
        />
        <div className='absolute z-[9] top-3 right-3'>
          <img
            className='w-14 h-14 border-gray-300 border-2 rounded-full mr-4'
            src={avatar}
            alt='Avatar of Jonathan Reinink'
          />
        </div>
        <div className='px-6 py-4'>
          <p className='text-lg uppercase  text-blue-700 '>{heading}</p>
          <div className='text-gray-900 font-bold text-2xl mb-2 hover:text-blue-700 cursor-pointer'>
            {title}
          </div>
          <div className=' my-4 flex gap-2 items-center'>
            <IconMapPinFilled />
            <p className='text-gray-700 text-base hover:text-blue-700 cursor-pointer'>
              {location}
            </p>
          </div>
          <div className=' my- flex items-center gap-2 text-gray-500 '>
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
        <div className=' border-t-2'>
          <p className='text-lg mx-4 font-bold py-6 '>{price} </p>
        </div>
      </div>
    </div>
  )
}