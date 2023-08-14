import { IconMapPinFilled } from '@tabler/icons-react'
import React from 'react'


const ListingFlex = ({heading, price, title, houseImg, location, name,lengthNum, bedNum, bathNum, bed, bath, length, role, avatar}) => {
  return (
    <div>
      <div className='max-w-sm w-full bg-white lg:w-[56rem]  lg:max-w-5xl lg:flex lg:gap-4 p-8 shadow-lg m-auto mt-4'>
        <div
          className='h-48 lg:h-64 lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden hover:scale-110 transition duration-500 cursor-pointer'
          style={{ backgroundImage: `url(${houseImg}) ` }}
          title='a house'
        ></div>
        <div className='bg-white w-full rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
          <div className='mb-4'>
            <div className='flex justify-between'>
              <div className=''>
                <p className='text-lg uppercase  text-blue-700 '>{heading}</p>
              </div>
              <div className=''>
                <p className='text-lg  text-blue-700 '>{price} </p>
              </div>
            </div>

            <div className='text-gray-900 font-bold text-2xl mb-2 hover:text-blue-700 cursor-pointer'>
              {title}
            </div>
            <div className=' my-4 flex gap-2 items-center'>
              <IconMapPinFilled />

              <p className='text-gray-700 text-base hover:text-blue-700 cursor-pointer'>
                {location}
              </p>
            </div>
            <div className=' my-4 flex items-center gap-2 text-gray-500 '>
              <p>
                <span className='font-bold text-gray-500'>{bedNum} </span> {bed}
              </p>
              <p>
                <span className='font-bold text-gray-500'>{bathNum} </span>{' '}
                {bath}
              </p>
              <p>
                <span className='font-bold text-gray-500'>{lengthNum}</span>{' '}
                {length}
              </p>
            </div>
          </div>
          <div className='lg:flex items-center gap-8 justify-between '>
            <div className='flex items-center'>
              <img
                className='w-14 h-14 border-gray-300 border-2 rounded-full mr-4'
                src={avatar}
                alt='Avatar of Jonathan Reinink'
              />
              <div className=' flex items-center justify-between '>
                <div className='text-sm'>
                  <p className='text-black font-bold my-2 leading-none'>
                    {name}
                  </p>
                  <p className='text-gray-600'>{role}</p>
                </div>
              </div>
            </div>

            {/* <div className=' my-2 flex justify-between items-center gap-2'>
              <div className=' w-10 h-10 bg-gray-200 text-gray-400 hover:bg-blue-700 cursor-pointer hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='m-auto my-2 w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25'
                  />
                </svg>
              </div>
              <div className='  w-10 h-10 bg-gray-200 text-gray-400 hover:bg-blue-700 cursor-pointer hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='m-auto my-2 w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                  />
                </svg>
              </div>
              <div className='  w-10 h-10 bg-gray-200 text-gray-400 hover:bg-blue-700 cursor-pointer hover:text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='m-auto my-2 w-6 h-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingFlex
