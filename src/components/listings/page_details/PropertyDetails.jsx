import React from 'react'

export default function PropertyDetails() {
  return (
    <div>
      <div className='grid bg-gray-300 grid-cols-3 divide-x-2'>
        <div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Property ID:</p>
            <p className='text-md font-semibold'>HZ29</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Home Area:</p>
            <p className='text-md font-semibold'>120 sqft</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Rooms:</p>
            <p className='text-md font-semibold'>7</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Baths:</p>
            <p className='text-md font-semibold'>2</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Year built:</p>
            <p className='text-md font-semibold'>1992</p>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Lot Area:</p>
            <p className='text-md font-semibold'>HZ29</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>
              Lot dimensions:
            </p>
            <p className='text-md font-semibold'>120 sqft</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Beds:</p>
            <p className='text-md font-semibold'>7</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>Price:</p>
            <p className='text-md font-semibold'>2</p>
          </div>
          <div className='flex justify-around py-4'>
            <p className='text-md font-semibold text-gray-500'>
              Property Status:
            </p>
            <p className='text-md font-semibold'>For Sale</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
