import React from 'react'

const LineWithText = ({ text }) => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='border border-orange-500 flex-1'></div>
      <span className='text-gray-500 font-semibold'>{text}</span>
    </div>
  )
}

export default LineWithText
