import React from 'react'
import { IconDoorEnter, IconTable, IconUsersGroup } from "@tabler/icons-react";
import { IconHome2 } from '@tabler/icons-react';

const WhyUs = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-20 md:py-40">
        <div className="container">
          <h5 className="uppercase md:text-sm text-sm mb-3.5 text-primary text-left tracking-wider">
            -- WHY ILEYAH --
          </h5>
          <h2 className="text-3xl md:text-6xl font-bold max-w-4xl">
            With Ileyah, life has never been easier.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-10 mt-20 text-white">
            <div>
              <div className="flex mb-8">
                <div className="w-14 h-14 rounded-3xl flex justify-center items-center bg-orange-500 text-white">
                  <IconHome2 size="28" />
                </div>
              </div>
              <h3 className=" text-lg font-bold">
                Rent Now, Pay Later
              </h3>
              <p className="mt-2 text-[.95rem] text-gray-400">
                Ileyah offers monthly, quarterly or annual payment terms to fit your unique schedule.
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
                Choose between having the space to yourself or flat-sharing with
                verified housemates
              </p>
            </div>
            <div>
              <div className="flex mb-8">
                <div className="w-14 h-14 rounded-3xl flex justify-center items-center bg-red-500 text-white">
                  <IconDoorEnter size="28" />
                </div>
              </div>
              <h3 className=" text-lg font-bold">
                Shortlet (coming soon)
              </h3>
              <p className="mt-2 text-[.95rem] text-gray-400">
                For homes at Ileyah, there are no extra hidden charges. No viewing or inspection fees. Pay once, pay
                all.
              </p>
            </div>
            <div>
              <div className="flex mb-8">
                <div className="w-14 h-14 rounded-3xl flex justify-center items-center bg-blue-500 text-white">
                  <IconTable size="28" />
                </div>
              </div>
              <h3 className=" text-lg font-bold">
                Lease to Own
              </h3>
              <p className="mt-2 text-[.95rem] text-gray-400">
              At Ileyah, With our flexible terms and supportive approach, we aim to make your homeownership dreams a reality
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyUs
