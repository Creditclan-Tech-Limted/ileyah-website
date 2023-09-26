import { useEffect, useRef } from 'react'
import { IconDoorEnter, IconTable, IconUsersGroup } from "@tabler/icons-react";
import { IconHome2 } from '@tabler/icons-react';
import Typed from 'typed.js';

const WhyUs = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Life', 'Rent'],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 2000,
      loop: true,
      showCursor: false
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="bg-gray-900 text-white py-20 md:py-40">
        <div className="container">
          <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary text-left tracking-wider">
            -- WHY ILEYAH --
          </h5>
          <h2 className="text-5xl md:text-6xl font-bold max-w-4xl">
            With Ileyah, <span className='text-primary-500' ref={el} /> has never been easier.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-10 mt-20 text-white">
            <div>
              <div className="flex mb-8">
                <div className="w-14 h-14 rounded-3xl flex justify-center items-center bg-orange-500 text-white">
                  <IconHome2 size="28" />
                </div>
              </div>
              <h3 className=" text-lg font-bold">
                Monthly Rent.
              </h3>
              <p className="mt-2 text-[.95rem] text-gray-400">
                Ileyah offers monthly, quarterly or annual payment terms to fit your unique budget.
              </p>
            </div>
            <div>
              <div className="flex mb-8">
                <div className="w-14 h-14 rounded-3xl flex justify-center items-center bg-teal-500 text-white">
                  <IconUsersGroup size="28" />
                </div>
              </div>
              <h3 className=" text-lg font-bold">
                Rent To Own (Beta)
              </h3>
              <p className="mt-2 text-[.95rem] text-gray-400">
                We are partnering with estate developers to support you.
              </p>
            </div>
            <div>
              <div className="flex mb-8">
                <div className="w-14 h-14 rounded-3xl flex justify-center items-center bg-red-500 text-white">
                  <IconDoorEnter size="28" />
                </div>
              </div>
              <h3 className=" text-lg font-bold">
                Shortlet (Beta)
              </h3>
              <p className="mt-2 text-[.95rem] text-gray-400">
                Overnight or short stay? We have you covered at Ileyah.
              </p>
            </div>
            <div>
              <div className="flex mb-8">
                <div className="w-14 h-14 rounded-3xl flex justify-center items-center bg-blue-500 text-white">
                  <IconTable size="28" />
                </div>
              </div>
              <h3 className=" text-lg font-bold">
                Find Artisans(Beta)
              </h3>
              <p className="mt-2 text-[.95rem] text-gray-400">
                Let's connect you with our well curated list of 1000+ artisans such as painters, plumbers, electricians, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs
