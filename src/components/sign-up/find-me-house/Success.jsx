'use client'

import React, { useState } from 'react'
import ImageLoadingAnimation from './LoadingAnimation'
import { useEffect } from 'react'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'
import useSignupStore from '@/store/signup'

const imgSrc = `https://images.unsplash.com/photo-1530412254853-ee708387a8ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80`

function Success() {
  const [loading, setLoading] = useState(false)
  const { data, updateData } = useSignupStore((state) => ({ data: state.data }))
  const router = useRouter()

    const area =
    typeof data.find_me_house.area === 'object'
      ? data.find_me_house.area.map((t) => t.value).join(', ')
      : data.find_me_house.area
  const budget = data?.find_me_house?.budget
  const phone = data?.user?.phone
      
  const search = () =>{
    console.log('')
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push(
        `/listings?search=${search}&phone=${phone}&budget=${budget}&area=${area}`
      ) // Redirect after loading
    }, 5000)
  }, [router])
  return (
    <>
      <div className='pt-70'>
        {/* <img style={ { width: "350px", marginLeft: "-5rem", marginBottom: "-3rem" } } src="/assets/images/Young and happy-bro.svg" alt=""/> */}
        {loading ? (
          <div className='relative'>
            <div className='pt-2'>
              <p className='mb-1 redirect-text text-deep-blue font-weight-bold font-22'>
                Please wait, <br /> while we look for your requirement.
                {/* <span className='ml-3 spin flex justify-center absolute z-20 '>
                  <i className='fa-solid  text-white  fa-spinner fa-3x '></i>
                </span> */}
                <span className='flex spin items-center justify-center z-40 '>
                  <i className='fa-solid   fa-spinner fa-2x'></i>
                </span>
              </p>
              {/* <p className="font-17 text-cc-dark font-17">You can also reach us on +234 905 555 2255</p> */}
              {/* <a href="tel:+2349055552255" className="btn btn-blue-full font-17">
              <span className="mr-3"><i className="fa-solid fa-phone"></i></span>
              Call +234 905 555 2255
            </a> */}
            </div>
            <ImageLoadingAnimation src={imgSrc} />
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Success
