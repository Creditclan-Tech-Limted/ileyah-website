import React from 'react'

const Explore = () => {
  return (
    <div className='container bg-primary-500 py-8 px-2 flex justify-between items-center flex-wrap left-1/2 transform -translate-x-1/2  z40 mt-4 absolute'>
      <div className='max-w-7xl  mx-10'>
        <div className='sm:flex sm:flex-col sm:align-center'>
          <h2 className='text-3xl font-extrabold  sm:text-4xl'>
            Looking for a dream home?
          </h2>
          <p className='mt-3 text-md  sm:w-4/5 sm:text-center'>
            We can help you realize your dream of a new home
          </p>
        </div>
      </div>
      <div className='max-w-7xl mx-10'>
        <div className=' sm:flex sm:justify-center'>
          <button className='w-full flex gap-4 items-center bg-white text-black py-4 hover:text-white hover:bg-black text-xl font-semibold px-6 border border-transparent shadow-lg transition duration-700 ease-in-out focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'>
            Explore Property
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              class='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Explore
