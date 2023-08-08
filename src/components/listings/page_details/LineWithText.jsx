import React from 'react'

const LineWithText = ({ text }) => {
  return (
    <div className='my-6  '>
      <span className=' border-l-2 px-2 py-2 border-orange-500 text-2xl font-bold'>
        {text}
      </span>
    </div>
  )
}

export default LineWithText
