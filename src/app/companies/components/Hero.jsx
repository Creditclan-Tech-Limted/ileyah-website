import Button from '@/components/global/Button'
import { IconArrowRight } from '@tabler/icons-react'
import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="bg-responsiveHero bg-cover text-white font-nunito">
        <div className="container">
          <div
            className="max-w-screen-xl mx-auto pt-36 pb-20"
          >
            <div className="mr-auto place-self-center pt-24 pb-32 md:text-center">
              <h1
                className="mb-4 text-6xl md:text-5xl xl:text-[5.5rem] font-extrabold tracking-tight">
                Flexible Rental Solutions <br /> for Your <span className='text-primary-500'>Employees</span>
              </h1>
              <p className="max-w-xl mx-auto font-light text-xl text-gray-300 my-10 text-primary md:text-center">
                Your employees can secure their desired accommodation quickly and conveniently.
              </p>
              {/* <Link href='/register'> */}
              <Button onClick={''} rightIcon={<IconArrowRight />} size="lg">
                Get started
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero