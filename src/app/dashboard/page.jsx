import { IconChevronRight, IconDoorEnter, IconHomeBolt, IconHomeHand, IconHomeSearch, IconRotate2 } from '@tabler/icons-react';
import React from 'react'
import Link from 'next/link';

const Page = () => {
  return (
    <>
    <div className="flex h-screen">
      <div class="container px-6 mr-40 my-auto ">
        <p className="text-xl mt-5 -mb-10">
          Welcome Praise, Please choose a rent now pay later option
        </p>
        <div className="space-y-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Link href='/renew-rent'>
            <div
              className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100 mt-4"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center">
                  <IconRotate2 size="20" />
                </div>
              </div>
              <div className="px-6">
                <p className="text-lg font-medium text-left">
                  Renew rent
                </p>
                <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                  Renew your house rent on a monthly basis while we handle the full payment
                </p>
              </div>
              <div>
                <IconChevronRight className="text-black" size="20" />
              </div>
            </div>
          </Link>
          <div
            className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center">
                <IconHomeHand size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                I found a house
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Renew your house rent on a monthly basis while we handle the full payment
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
          <div
            className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-green-600 text-white grid place-items-center">
                <IconHomeSearch size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Find me a house
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Renew your house rent on a monthly basis while we handle the full payment
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
          <div
            className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white grid place-items-center">
                <IconHomeBolt size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Distress Sales (coming soon)
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Renew your house rent on a monthly basis while we handle the full payment
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
          <div
            className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-yellow-600 text-white grid place-items-center">
                <IconHomeHand size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Rent to own (Beta)
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Renew your house rent on a monthly basis while we handle the full payment
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
          <div
            className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-black text-white grid place-items-center">
                <IconDoorEnter size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Shortlet (coming soon)
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Renew your house rent on a monthly basis while we handle the full payment
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Page;