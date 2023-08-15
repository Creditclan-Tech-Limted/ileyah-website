import React from 'react'

function RightHandContainer({children, title}) {
  return (
    <div className='bg-white rounded-lg w-full lg:w-96 max-h-[30rem] shadow-lg p-4 py-6 border-2'>
      <div className=''>
        <h1 className='text-xl font-semibold px-4 border-l-2 my-4 border-blue-700'>
          {title}
        </h1>
      </div>
      {children}{' '}
    </div>
  )
}

export default RightHandContainer