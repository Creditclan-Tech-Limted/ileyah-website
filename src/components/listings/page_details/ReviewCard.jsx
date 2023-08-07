import { IconBrandFacebook, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'
import React from 'react'
import RightHandContainer from './RightHandContainer'

const ReviewCard = ({ name, rating, review, imageUrl,job }) => {
  return (
      <RightHandContainer>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-40 h-40 rounded-full overflow-hidden'>
          <img
            src={imageUrl}
            alt={name}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='py-4 text-center'>
          <h2 className='text-xl font-semibold'>{name}</h2>
          <p className='mt-4 text-gray-500 font-light text-sm'>{job}</p>
          <div className='flex items-center justify-center'>
            <span className='text-yellow-500 text-lg hover:text-orange-600'>
              {rating}
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-yellow-500 hover:text-orange-600'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M5.293 18.293a1 1 0 0 0 1.414 0L10 15.414l3.293 2.879a1 1 0 0 0 1.32-.083c.307-.283.397-.73.219-1.107l-1.127-3.267 2.864-2.864a1 1 0 0 0-.294-1.638l-3.24-1.184-1.184-3.24a1 1 0 0 0-1.638-.294L10 4.586 7.293 1.707a1 1 0 0 0-1.638.293l-1.184 3.24-3.24 1.184a1 1 0 0 0-.294 1.638l2.864 2.864-1.127 3.267a1 1 0 0 0 .219 1.107 1 1 0 0 0 1.32.083L10 15.414l1.293 2.879z'
              />
            </svg>
          </div>
        </div>
      </div>
      <p className='mt-2 text-gray-600 text-center '>{review}</p>
      <div className='mt-4 flex justify-center gap-2 items-center'>
        
          <IconBrandFacebook className=' text-blue-500 hover:text-orange-600' />
          <IconBrandTwitter className=' text-blue-500 hover:text-orange-600' />
          <IconBrandLinkedin className=' text-blue-500 hover:text-orange-600' />
          <IconBrandYoutube className=' text-blue-500 hover:text-orange-600' />
        
      </div>
      </RightHandContainer>
  )
}

export default ReviewCard
