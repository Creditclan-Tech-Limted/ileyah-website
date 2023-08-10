import { IconSearch } from '@tabler/icons-react'
import React from 'react'

const SearchBar = ({ placeholder }) => {
  return (
    <div className='flex items-center border w-full border-gray-300 rounded'>
      <input
        type='text'
        placeholder={placeholder}
        className='w-full text-black bg-gray-100 p-4 focus:outline-none'
      />
      <div className='bg-blue-700 p-4'>
        <IconSearch color='white' />
      </div>
    </div>
  )
}

export default SearchBar
