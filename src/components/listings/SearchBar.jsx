import React from 'react'

const SearchBar = ({ placeholder }) => {
  return (
    <div className='flex items-center border w-full border-gray-300 rounded'>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full text-black bg-gray-300 p-6 focus:outline-none'
      />
      <div className='bg-orange-600 p-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-white  p- ml4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15 15l5.5 5.5M4 11a7 7 0 017-7 7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7z'
          />
        </svg>
      </div>
    </div>
  )
}

export default SearchBar
