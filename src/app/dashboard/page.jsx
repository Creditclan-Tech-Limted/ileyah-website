import {
  IconChevronRight,
  IconDoorEnter,
  IconHomeBolt,
  IconHomeHand,
  IconHomeSearch,
  IconRotate2
} from '@tabler/icons-react';
import React from 'react'
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <p className="text-lg">
        Choose an option below to get started
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-5 mt-8">
        <Link href='/dashboard/renew-rent'>
          <div
            className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
          >
            <div className="text-red-600 grid place-items-center mt-1">
              <IconRotate2 size="32"/>
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
              <IconChevronRight className="text-black" size="20"/>
            </div>
          </div>
        </Link>
        <div
          className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
        >
          <div className="text-blue-600 grid place-items-center mt-1">
            <IconHomeHand size="32"/>
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
            <IconChevronRight className="text-black" size="20"/>
          </div>
        </div>
        <div
          className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
        >
          <div className="text-green-600 grid place-items-center mt-1">
            <IconHomeSearch size="32"/>
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
            <IconChevronRight className="text-black" size="20"/>
          </div>
        </div>
        <div
          className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
        >
          <div className="text-purple-600 grid place-items-center mt-1">
            <IconHomeBolt size="32"/>
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
            <IconChevronRight className="text-black" size="20"/>
          </div>
        </div>
        <div
          className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
        >
          <div className="text-yellow-600 grid place-items-center mt-1">
            <IconHomeHand size="32"/>
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
            <IconChevronRight className="text-black" size="20"/>
          </div>
        </div>
        <div
          className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
        >
          <div className="text-black grid place-items-center mt-1">
            <IconDoorEnter size="32"/>
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
            <IconChevronRight className="text-black" size="20"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;
