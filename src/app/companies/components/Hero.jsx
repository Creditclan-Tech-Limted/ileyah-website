import Button from '@/components/global/Button'
import { useState } from 'react'
import SignUp from '../Modals/SignUp'
import Link from 'next/link'

const Hero = () => {
  const [openSignUp, setOpenSignUp] = useState(false)

  const handleClose = async () => {
    try {
      setOpenSignUp(false)
    } catch (error) {
      console.log({ error });
    }
  }
  return (
    <>
      <section className="bg-responsiveHero h-[80vh] bg-cover text-white font-nunito mt-28">
        <div className="container flex h-full">
          <div
            className="max-w-screen-xl mx-auto my-auto"
          >
            <div className="mr-auto place-self-center pt-24 pb-32 md:text-center">
              <h1
                className="mb-4 text-6xl md:text-5xl xl:text-[6.5rem] font-extrabold tracking-tight">
                Flexible Rental Solutions <br /> for Your <span className='text-primary-500'>Employees</span>
              </h1>
              <p className="max-w-xl mx-auto font-light text-xl text-gray-300 my-10 text-primary md:text-center">
                Your employees can secure their desired accommodation quickly and conveniently.
              </p>
              {/* <Link href='/register'> */}
              <div className="flex w-full">
                <div className="md:mx-auto space-x-5">
                  <Link href='/register/companies'>
                    <Button size="lg">
                      Get started
                    </Button>
                  </Link>
                  <Link href='/login'>
                    <Button variant='outlined' color='white' size="lg">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>

      <SignUp isOpen={openSignUp} isClosed={handleClose} />
    </>
  )
}

export default Hero;