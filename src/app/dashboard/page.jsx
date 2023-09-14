'use client'
import {
  IconChevronRight,
  IconDoorEnter,
  IconEmergencyBed,
  IconHeadset,
  IconHome,
  IconHomeBolt,
  IconHomeHand,
  IconHomeSearch,
  IconRotate2
} from '@tabler/icons-react';
import React, { useEffect } from 'react'
import Link from 'next/link';
import useSignupStore from '@/store/signup';
import Loader from '@/global/Loader';
import { useCheckRentRequestMutation } from "@/api/rent";
import { useRouter } from 'next/navigation';
import Sidebar from './Sidebar';
import DashNav from './DashNav';
import Button from '@/components/global/Button';
import IconButton from '@/global/IconButton';


const Page = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const router = useRouter();

  const { mutateAsync: checkUser, isLoading: isCheckUserLoading } =
    useCheckRentRequestMutation();

  const getUser = async () => {
    try {
      const res = await checkUser(data?.user?.phone);
      console.log(res?.data);
      if (res.data.status) {
        updateData({ request: res.data.request })
        router.push('/dashboard/renew-rent?status=pending')
      }
    } catch (e) {
      console.log({ e });
    }
  };

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <div className="h-screen flex">
        {isCheckUserLoading && (
          <div className='my-auto mx-auto relative'>
            <div role="status" className="space-y-2.5 animate-pulse max-w-lg relative">
              <div className="relative flex items-center w-full space-x-2">
                <div className="h-50 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-50 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-50 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
            </div>
            <Loader text='Loading...' />
          </div>
        )}
        {!isCheckUserLoading && (
          <div className='p-10 space-y-10'>
            <div className="flex">
              <div>
                <p className='text-2xl'>Hello <span className='font-semibold'>{data?.user?.name}</span> 🥳</p>
                <p className="text-xl"> Choose an option below to get started </p>
              </div>
              <div className='ml-auto'>
                <Button leftIcon={<IconHeadset />}> Support</Button>
              </div>
              {/* <p className='text-2xl'>Hello {data?.user?.fullname || "Praise"}</p> */}
            </div>
            <div>
              <h3 class="text-xl font-medium mb-8 px-1 border-b pb-6">Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                <Link href='/dashboard/renew-rent'>
                  <div
                    className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
                  >
                    <div className="text-red-600 grid place-items-center mt-1">
                      <IconRotate2 size="32" />
                    </div>
                    <div className="px-6">
                      <p className="text-lg font-medium text-left">
                        Renew rent
                      </p>
                      <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                        Renew your house rent on a monthly basis while we handle the full payment
                      </p>
                    </div>
                    <div className='my-auto'>
                      <IconChevronRight className="text-black" size="20" />
                    </div>
                  </div>
                </Link>
                <div
                  className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
                >
                  <div className="text-blue-600 grid place-items-center mt-1">
                    <IconHomeHand size="32" />
                  </div>
                  <div className="px-6">
                    <p className="text-lg font-medium text-left">
                      I found a house
                    </p>
                    <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                      Renew your house rent on a monthly basis while we handle the full payment
                    </p>
                  </div>
                  <div className='my-auto'>
                    <IconChevronRight className="text-black" size="20" />
                  </div>
                </div>
                <div
                  className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
                >
                  <div className="text-green-600 grid place-items-center mt-1">
                    <IconHomeSearch size="32" />
                  </div>
                  <div className="px-6">
                    <p className="text-lg font-medium text-left">
                      Find me a house
                    </p>
                    <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                      Renew your house rent on a monthly basis while we handle the full payment
                    </p>
                  </div>
                  <div className='my-auto'>
                    <IconChevronRight className="text-black" size="20" />
                  </div>
                </div>
                <div
                  className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
                >
                  <div className="text-purple-600 grid place-items-center mt-1">
                    <IconHomeBolt size="32" />
                  </div>
                  <div className="px-6">
                    <p className="text-lg font-medium text-left">
                      Distress Sales (coming soon)
                    </p>
                    <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                      Renew your house rent on a monthly basis while we handle the full payment
                    </p>
                  </div>
                  <div className='my-auto'>
                    <IconChevronRight className="text-black" size="20" />
                  </div>
                </div>
                <div
                  className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
                >
                  <div className="text-yellow-600 grid place-items-center mt-1">
                    <IconHomeHand size="32" />
                  </div>
                  <div className="px-6">
                    <p className="text-lg font-medium text-left">
                      Rent to own (Beta)
                    </p>
                    <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                      Renew your house rent on a monthly basis while we handle the full payment
                    </p>
                  </div>
                  <div className='my-auto'>
                    <IconChevronRight className="text-black" size="20" />
                  </div>
                </div>
                <div
                  className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
                >
                  <div className="text-black grid place-items-center mt-1">
                    <IconDoorEnter size="32" />
                  </div>
                  <div className="px-6">
                    <p className="text-lg font-medium text-left">
                      Shortlet (coming soon)
                    </p>
                    <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                      Renew your house rent on a monthly basis while we handle the full payment
                    </p>
                  </div>
                  <div className='my-auto'>
                    <IconChevronRight className="text-black" size="20" />
                  </div>
                </div>
                {/* <div
                className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
              >
                <div className="text-purple-600 grid place-items-center mt-1">
                  <IconHomeBolt size="32" />
                </div>
                <div className="px-6">
                  <p className="text-lg font-medium text-left">
                    Distress Sales (coming soon)
                  </p>
                  <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                    Renew your house rent on a monthly basis while we handle the full payment
                  </p>
                </div>
                <div className='my-auto'>
                  <IconChevronRight className="text-black" size="20" />
                </div>
              </div>
              <div
                className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
              >
                <div className="text-yellow-600 grid place-items-center mt-1">
                  <IconHomeHand size="32" />
                </div>
                <div className="px-6">
                  <p className="text-lg font-medium text-left">
                    Rent to own (Beta)
                  </p>
                  <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                    Renew your house rent on a monthly basis while we handle the full payment
                  </p>
                </div>
                <div className='my-auto'>
                  <IconChevronRight className="text-black" size="20" />
                </div>
              </div>
              <div
                className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
              >
                <div className="text-black grid place-items-center mt-1">
                  <IconDoorEnter size="32" />
                </div>
                <div className="px-6">
                  <p className="text-lg font-medium text-left">
                    Shortlet (coming soon)
                  </p>
                  <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                    Renew your house rent on a monthly basis while we handle the full payment
                  </p>
                </div>
                <div className='my-auto'>
                  <IconChevronRight className="text-black" size="20" />
                </div>
              </div> */}
              </div>
            </div>

            {/* <div>
              <h3 class="text-xl font-medium mb-8 px-1 border-b pb-6">Pending Rent Request</h3>
              <div className='grid grid-cols-2'>
                <div>
                  <div className="flex">
                    <div> <IconHome /> </div>
                    <div>
                      <p>lorem</p>
                      <p>lorem</p>
                      <p>lorem</p>
                    </div>
                  </div>
                </div>
                <div>
                  N300,000
                </div>
              </div>
            </div> */}
          </div>
        )}
      </div>

    </>
  )
}

export default Page;
