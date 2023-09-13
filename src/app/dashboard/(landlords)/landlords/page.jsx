'use client'
import Button from '@/components/global/Button';
import { IconChevronRight, IconHome2 } from '@tabler/icons-react';
import React from 'react'
import Transactions from './Transactions';
import useSignupStore from '@/store/signup';

const Page = () => {
  const { data, updateData } = useSignupStore((state) => state);

  return (
    <>
      <div className='text-4xl font-bold'>
        Welcome, ILEYAH {data?.user?.fullname} 👋🏿
      </div>
      <div className="grid grid-cols-[1fr] md:grid-cols-[2fr_1fr] gap-10 mt-10">
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
            <div className="bg-red-500 text-white md:text-black md:bg-[#F0F3FA] shadow rounded-xl px-8 py-6 cursor-pointer h-[100px]">
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-bold">100</div>
                  <div className='text-sm mt-2'>Total House</div>
                </div>
                <div className="my-auto">
                  <IconChevronRight className='text-white md:text-gray-500' />
                </div>
              </div>
            </div>
            <div className="bg-blue-500 text-white md:text-black md:bg-[#F0F3FA] shadow rounded-xl px-8 py-6 cursor-pointer h-[100px]">
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-bold">100</div>
                  <div className='text-sm mt-2'>Rented Apartments</div>
                </div>
                <div className="my-auto">
                  <IconChevronRight className='text-white md:text-gray-500' />
                </div>
              </div>
            </div>
            <div className=" bg-cyan-500 text-white md:text-black md:bg-[#F0F3FA] shadow rounded-xl px-8 py-6 cursor-pointer h-[100px]">
              <div className="flex justify-between">
                <div>
                  <div className="text-3xl font-bold">100</div>
                  <div className='text-sm mt-2'>Vacant Apartments</div>
                </div>
                <div className="my-auto">
                  <IconChevronRight className='text-white md:text-gray-500' />
                </div>
              </div>
            </div>
          </div>
          <Transactions />
        </div>
        <div className='hidden md:block'>
          <div className="bg-blue-600 rounded-xl p-4 inline-flex w-full">
            <IconHome2 color='white' />
            <p className='text-white mx-5'>Claim Your <span className='font-bold'>SIGNUP</span> Bonus </p>
          </div>
          <div className='mt-3 bg-[#F0F3FA] shadow rounded-lg pl-10 pr-10 pt-10 text-xl h-[350px] relative'>
            <p className='text-5xl font-medium'>No more Tenant Palava</p>
            <div className="flex mt-5 font-bold">
              <Button className='inline-flex' variant='outlined' color='black' size='sm' rightIcon={<IconChevronRight />} >Get Started </Button>
            </div>
            <img src="/assets/images/house-svg.png" alt="Image" className="absolute bottom-0 right-0 w-32 h-32" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;