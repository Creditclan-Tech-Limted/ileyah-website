'use client'
import {
  IconChevronDown,
  IconChevronRight,
  IconExclamationCircle,
  IconHeadset,
  IconHomeHand,
  IconHomeSearch,
  IconLogout,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import useSignupStore from '@/store/signup';
import Loader from '@/global/Loader';
import { useCheckRentRequestMutation, useGetInspectionDetails, useGetLoanDetailsQuery } from "@/api/rent";
import { useRouter } from 'next/navigation';
import Button from '@/components/global/Button';
import ViewPropertyDetails from './modals/ViewPropertyDetails';
import SimpleDropdown from '@/global/SimpleDropdown';
import classNames from 'classnames';
import { formatCurrency } from '@/lib/utils';
import InspectionDetails from './modals/InspectionDetails';
import RenewRentDashboard from './(renew-rent)/renew-rent/page';
import CheckOffers from './(inspections)/inspections/page';
import FoundHouseDashboard from './find-me-a-house/page';
import WantThis from './modals/WantThis';
import axios from 'axios';
import ListingsGrid from '@/components/listings/ListingsGrid';
import Drawer from '@/components/Drawer';


const Page = ({ className }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const router = useRouter();
  const [pendingRequest, setPendingRequest] = useState(null);
  const [openViewProperty, setOpenViewProperty] = useState(false);
  const [openViewInspections, setopenViewInspections] = useState(false);
  const [inspections, setInspections] = useState();
  const [current, setCurrent] = useState();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenFoundHouse, setIsOpenFoundHouse] = useState(false)
  const [openCheckOffers, setOpenCheckOffers] = useState(false)
  const [properties, setProperties] = useState([]);

  const { mutateAsync: checkUser, isLoading: isCheckUserLoading } = useCheckRentRequestMutation();
  const { mutateAsync: getInspections, isLoading: isGetInspectionsLoading } = useGetInspectionDetails();

  const getUser = async () => {
    try {
      const res = await checkUser(data?.user?.phone);
      if (res.data.status) {
        setPendingRequest(res.data.request)
        updateData({ request: res.data.request })
      }
    } catch (e) {
      console.log({ e });
    }
  };

  const {
    data: loan,
    isLoading: isGetLoanDetailsLoading,
  } = useGetLoanDetailsQuery({
    email: data?.user?.email,
    phone: data?.user?.phone,
    request_id: pendingRequest?.creditclan_request_id,
  });

  const getPorperties = async () => {
    try {
      const res = await axios.get('https://kuda-creditclan-api.herokuapp.com/get_properties')
      setProperties(res?.data?.data)
      return res?.data?.data
    } catch (error) {

    }
  }

  const getInspectionsDetails = async () => {
    try {
      const res = await getInspections({ landlordAgentId: data?.user?.id });
      if (res?.data?.data.length) {
        setInspections(res?.data?.data)
      } else {
        setInspections(null)
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const handleLogout = () => {
    router.push('/login')
  };

  useEffect(() => {
    getUser();
    getInspectionsDetails();
    getPorperties();
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
          <>
            <div className='p-10 space-y-10'>
              <div className="flex">
                <div>
                  <p className='text-2xl'>Welcome <span className='font-semibold'>{data?.user?.name}</span> 🥳</p>
                </div>
                <div className='ml-auto'>
                  <SimpleDropdown
                    trigger={
                      <div className="flex items-center">
                        <img
                          src={`https://ui-avatars.com/api/?name=${data?.user?.name} ${data?.user?.name?.split(' ')[1]}`}
                          className={classNames('w-8 h-8 rounded-full', className)}
                          alt={`${data?.user?.firstName} ${data?.user?.lastName}`}
                        />
                        <IconChevronDown size="18" className="ml-3" />
                      </div>
                    }
                    items={[
                      { text: 'Logout', icon: <IconLogout size="18" />, onClick: handleLogout }
                    ]}
                  />
                </div>
              </div>
              <div class="flex items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">Hello!</span> Please check your credit limit here.
                </div>
                <Button variant='outlined' color='red' className='ml-auto' onClick={() => setOpenCheckOffers(true)}>Check</Button>
              </div>
              <div>
                {isGetInspectionsLoading ? (
                  <>
                    <div>Loading...</div>
                    <div>Loading...</div>
                    <div>Loading...</div>
                  </>
                ) :
                  <>
                    <div className="grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-10 items-start">
                      <div>
                        <div>
                          <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6">Pending Rent Request</h3>
                          {pendingRequest && (
                            <div className='grid'>
                              <div className="flex p-5  rounded-xl items-center bg-red-500 text-white">
                                <div className='my-auto'> <IconHomeSearch size={50} /> </div>
                                <div className='px-5'>
                                  <p className='text-xl '>{pendingRequest?.address}</p>
                                  <div className="">
                                    <p className=''> Gbagaga, Lagos</p>
                                    <p>{formatCurrency(pendingRequest?.amount)}</p>
                                  </div>
                                </div>
                                <Button variant='outlined' color='white' className='ml-auto' onClick={() => setOpenViewProperty(true)}>View</Button>
                              </div>
                            </div>
                          )}
                          {!pendingRequest && (
                            <>
                              <div className='border p-10 rounded-xl'>
                                <div className="flex flex-col">
                                  <IconExclamationCircle className='mx-auto my-auto' />
                                  <p className='text-center mt-5'>No Pending Request Yet</p>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6 mt-10">Pending Inspections</h3>
                        {inspections && (
                          <div className='border border-gray-300 py-2  rounded-xl divide-y divide-gray-300 '>
                            {inspections?.map((m, i) => (
                              <>
                                <div className="flex py-4 px-8">
                                  <div className="flex">
                                    <div className='my-auto mr-5'> <IconHomeSearch size={30} className='text-cyan-600' /> </div>
                                    <div>
                                      <p>{m?.ileyah_property?.description}</p>
                                      <p>{formatCurrency(m?.ileyah_property?.price)}</p>
                                    </div>
                                  </div>
                                  <Button className='ml-auto my-auto' variant='outlined' color='black' onClick={() => {
                                    setCurrent(m);
                                    setopenViewInspections(true)
                                  }}>View</Button>
                                </div>
                              </>
                            ))}
                          </div>
                        )}
                        {!inspections && (
                          <>
                            <div className='border p-10 rounded-xl'>
                              <div className="flex flex-col">
                                <IconExclamationCircle className='mx-auto my-auto' />
                                <p className='text-center mt-5'>No Pending Inspections </p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6">Products</h3>
                        <div className='space-y-6'>
                          <div
                            className="rounded-2xl flex items-start border border-gray-300 px-7 py-7 cursor-pointer hover:bg-gray-100"
                          >
                            <div className="text-red-600 grid place-items-center mt-1">
                              <IconHomeSearch size="32" />
                            </div>
                            <div className="px-6">
                              <p className="text-lg font-medium text-left">
                                Browse Listings
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
                            onClick={() => {
                              if (pendingRequest) {
                                setOpenViewProperty(true)
                              }
                            }}                          >
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
                            onClick={() => {
                              if (pendingRequest) {
                                setOpenViewProperty(true)
                              }
                            }}                          >
                            <div className="text-green-600 grid place-items-center mt-1">
                              <IconHeadset size="32" />
                            </div>
                            <div className="px-6">
                              <p className="text-lg font-medium text-left">
                                Talk to Advisor
                              </p>
                              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                                Renew your house rent on a monthly basis while we handle the full payment
                              </p>
                            </div>
                            <div className='my-auto'>
                              <IconChevronRight className="text-black" size="20" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium mb-8 px-1 border-b pb-6 my-20">Market Place</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                      {properties.splice(0, 6).map((m, i) => (
                        <div key={i}>
                          <ListingsGrid
                            key={i}
                            houseImg={m.image}
                            heading='For Rent'
                            price='240,900/Month'
                            title={m?.description}
                            // avatar={imageAvatar}
                            name='Jonathan Reinink'
                            role='Estate Agents'
                            location={m?.address}
                            lengthNum='3450'
                            bedNum={m?.beds}
                            bathNum={m?.baths}
                            bed='Bed'
                            bath='Bath'
                            length='Square Ft'
                            property={m}
                          // onClick={() => {
                          //   setCurrent(m)
                          //   setOpenPropertyDetails(true)
                          // }}
                          />
                        </div>
                      ))}
                    </div>
                  </>
                }
              </div>
            </div>
          </>
        )}
      </div>
      <Drawer isOpen={openViewProperty} onClose={() => setOpenViewProperty(false)} title='Pending Request'>
        <ViewPropertyDetails request={pendingRequest} />
      </Drawer>
      <InspectionDetails isOpen={openViewInspections} onClose={() => setopenViewInspections(false)} inspection={current} />
      <RenewRentDashboard isOpenDrawer={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
      <CheckOffers isOpen={openCheckOffers} onClose={() => setOpenCheckOffers(false)} />
      <FoundHouseDashboard isOpenDrawer={isOpenFoundHouse} onClose={() => setIsOpenFoundHouse(false)} />
      {data?.user?.want_this && (
        <WantThis />
      )}
    </>
  )
}

export default Page;