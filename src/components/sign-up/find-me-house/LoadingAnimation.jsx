'use client'
import React, { useState, useEffect } from 'react'

const ImageLoadingAnimation = ({ src, alt }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setLoading(false)
    }
  }, [src])

  return (
    <div className='relative'>
      {loading && (
        <div className='absolute inset-0 flex items-center justify-center bg-gray-100'>
          <svg
            className='animate-spin h-10 w-10 text-gray-500'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              strokeWidth='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.854 3 7.978l3-2.687z'
            ></path>
          </svg>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full ${loading ? 'hidden' : 'block'}`}
        style={{ aspectRatio: '16/9' }}
      />
    </div>
  )
}

export default ImageLoadingAnimation
