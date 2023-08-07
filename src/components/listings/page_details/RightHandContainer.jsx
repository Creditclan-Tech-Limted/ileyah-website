import React from 'react'

function RightHandContainer({children, title}) {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4 py-6 border-2'>
      <div className=''>
        <h1 className='text-xl font-semibold px-4 border-l-2 my-4 border-red-500'>{title}</h1>
      </div>
      {children}{' '}
    </div>
  )
}

export default RightHandContainer