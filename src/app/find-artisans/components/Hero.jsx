import React from 'react'
import Navbar from '@/components/Navbar'

const Hero = () => {
  return (
    <>
      <div class="mt-[100px] pt-32 pb-32 md:pt-36 md:pb-36 bg-gray-900 pattern-2 relative rounded-b-[150px] artisan-bg">
        <div class="container flex-row md:flex my-auto">
          <div className="my-auto mx-auto">
            <h1 className='text-center max-w-5xl font-display text-7xl md:text-[6.5rem] font-bold leading-[1.2] sm:tracking-tight text-slate-300'>
              Find a House, <br /> Live like a <span className='text-primary-600'>King 👑</span>
            </h1>
            <p className="max-w-xl text-center mx-auto font-light text-2xl text-gray-500 mt-4 text-primary">
              Enjoy our complimentary / discounted maintenance services.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero