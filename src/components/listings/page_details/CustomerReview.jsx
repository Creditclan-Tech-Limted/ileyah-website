'use-client'

import React from 'react'

const CustomerReview = ({ name, avatar, rating, review, dateOfComment }) => {
     const renderStars = (count) => {
       const stars = []
       for (let i = 1; i <= 5; i++) {
         if (i <= count) {
           stars.push(
             
             <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='currentColor'
               className='h-5 w-5 text-yellow-500 fill-current'
             >
               <path
                 strokeLinecap='round'
                 strokeLinejoin='round'
                 d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
               />
             </svg>
           )
         } else {
           stars.push(
             
             <svg
               xmlns='http://www.w3.org/2000/svg'
               fill='none'
               viewBox='0 0 24 24'
               stroke-width='1.5'
               stroke='currentColor'
               className='h-5 w-5 text-gray-300 fill-current'
             >
               <path
                 strokeLinecap='round'
                 strokeLinejoin='round'
                 d='M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z'
               />
             </svg>
           )
         }
       }
       return stars
     }

  return (
    <div className='bg-white rounded-lg shadow-md p-6 my-3'>
      <div className='flex items-start gap-4'>
        <div className='flex-shrink-0'>
          <img src={avatar} alt={name} className='w-20 h-20 rounded-full' />
        </div>
        <div className=' '>
          <div className='flex justify-between items-center'>
            <div className=''>
              <h2 className='text-xl font-semibold'>{name}</h2>
              <div className='flex items-center'>
                <div className='flex'>{renderStars(rating)}</div>
              </div>
            </div>
            <p className='rounded-full border-2  hover:border-red-500 px-4 py-2'>
              {' '}
              {dateOfComment}
            </p>
          </div>

          <p className='mt-4 text-gray-600'>{review}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReview
