'use client'
import {
  IconChevronRight,
  IconExclamationCircle,
  IconHeadset,
  IconHomeHand,
  IconHomeSearch,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react'
import useSignupStore from '@/store/signup';
import Loader from '@/global/Loader';
import { useCheckRentRequestMutation, useGetInspectionDetails, useGetLoanDetailsQuery } from "@/api/rent";
import Button from '@/components/global/Button';
import ViewPropertyDetails from './modals/ViewPropertyDetails';
import { formatCurrency, parseJsonString } from '@/lib/utils';
import InspectionDetails from './modals/InspectionDetails';
import RenewRentDashboard from './(renew-rent)/renew-rent/page';
import CheckOffers from './(inspections)/inspections/page';
import FoundHouseDashboard from './find-me-a-house/page';
import WantThis from './modals/WantThis';
import axios from 'axios';
import ListingsGrid from '@/components/listings/ListingsGrid';
import Drawer from '@/components/Drawer';
import { isBefore, isAfter } from 'date-fns'
import MakePayment from './modals/MakePayment';


const Page = ({ className }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const [pendingRequest, setPendingRequest] = useState(null);
  const [openViewProperty, setOpenViewProperty] = useState(false);
  const [openViewInspections, setopenViewInspections] = useState(false);
  const [inspections, setInspections] = useState();
  const [current, setCurrent] = useState();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenFoundHouse, setIsOpenFoundHouse] = useState(false);
  const [openCheckOffers, setOpenCheckOffers] = useState(false);
  const [properties, setProperties] = useState([]);
  const [openPropertyDetails, setOpenPropertyDetails] = useState(false);
  const [globalLoading, setglobalLoading] = useState(true);
  const [upfront, setUpfront] = useState();
  const [recoveryFilter, setRecoveryFilter] = useState();
  const [recovery, setRecovery] = useState();
  const [openMakePayment, setOpenMakePayment] = useState(false)

  const { mutateAsync: checkUser, isLoading: isCheckUserLoading } = useCheckRentRequestMutation();
  const { mutateAsync: getInspections, isLoading: isGetInspectionsLoading } = useGetInspectionDetails();

  const getUser = async () => {
    try {
      const res = await checkUser(data?.user?.phone);
      if (res.data.status) {
        await getRecoveryInfo(res?.data?.request?.creditclan_request_id)
        await getUpfrontStatus(res?.data?.request?.creditclan_request_id);
        const request = res?.data?.request ?? null;
        if (request) request.payload = parseJsonString(request.payload) || request.payload;
        setPendingRequest(res.data.request)
        updateData({ request: res.data.request })
      }
    } catch (e) {
      console.log({ e });
    }
  };

  const handleClose = async () => {
    try {
      setOpenPropertyDetails(false)
    } catch (error) {
      console.log({ error });
    }
  }

  const getRecoveryInfo = async (creditclan_request_id) => {
    try {
      const res = await axios.post('https://mobile.creditclan.com/api/v3/loan/recovery', { creditclan_request_id: creditclan_request_id }, { headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' } });
      // const res = await axios.post('https://mobile.creditclan.com/api/v3/loan/recovery', { creditclan_request_id: '298315' }, { headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' } });
      // const res = await axios.post('https://mobile.creditclan.com/api/v3/loan/recovery', { creditclan_request_id: '298203' }, { headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' } });
      setRecovery(res?.data?.data)
      if (res?.data?.data) {
        const schedule = res?.data?.data?.currentLoan[0].schedules;
        let overdueBalances = [];
        let nextPayment = null;
        let nextPaymentDate = null;
        let nextMonth = null;
        let nextTillEnd = null;
        let nextTillEndDate = null;
        let nextTillEndTotal = null;
        const hasFullyPaid = schedule.every(i => +i.how_much_remaining === 0)
        console.log({ schedule, hasFullyPaid });
        if (!hasFullyPaid) {
          overdueBalances = schedule?.filter((i) => {
            return isBefore(new Date(i.repayment_date), new Date()) && +i.how_much_remaining > 0;
          })
          if (overdueBalances.length > 0) {
            nextPayment = overdueBalances.reduce((acc, cur) => acc + (+cur?.how_much_remaining), 0);
            nextPaymentDate = overdueBalances[0]?.repayment_date
            const next = schedule.find((s) => isAfter(new Date(s.repayment_date), new Date()) && +s.how_much_remaining > 0);
            nextTillEnd = schedule.filter((s) => isAfter(new Date(s.repayment_date), new Date()) && +s.how_much_remaining > 0);
            nextTillEndTotal = nextTillEnd.reduce((acc, cur) => acc + (+cur?.how_much_remaining), 0)
            // console.log({ next, nextTillEnd, nextTillEndTotal });
            nextMonth = next;
          } else {
            const next = schedule.find((s) => isAfter(new Date(s.repayment_date), new Date()) && +s.how_much_remaining > 0);
            console.log({ next });
            nextPayment = +next.how_much_remaining;
            nextPaymentDate = next?.repayment_date
          }
        }

        setRecoveryFilter({
          hasFullyPaid, overdueBalances, nextPayment, nextPaymentDate, nextMonth, nextTillEnd, nextTillEndTotal
        })
      }
    } catch (error) {
      console.log({ error });
    }
  };

  // const {
  //   data: loan,
  //   isLoading: isGetLoanDetailsLoading,
  // } = useGetLoanDetailsQuery({
  //   email: 'talk2asaphorlar@gmail.com',
  //   phone: '07065252120',
  //   request_id: '312189',
  // });

  // const {
  //   data: loan,
  //   isLoading: isGetLoanDetailsLoading,
  // } = useGetLoanDetailsQuery({
  //   email: 'proteckvision@gmail.com',
  //   phone: '08165437237',
  //   request_id: '310655',
  // });

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
      console.log(error);
    }
  }

  const getInspectionsDetails = async () => {
    try {
      const res = await getInspections({ landlordAgentId: '27ebe5f4-05d5-42f8-bff9-e96929ff4ee0' });
      if (res?.data?.data.length) {
        setInspections(res?.data?.data)
      } else {
        setInspections(null)
      }
    } catch (error) {
      console.log({ error });
    }
  }

  const getUpfrontStatus = async (creditclan_request_id) => {
    try {
      const res = await axios.post('https://wema.creditclan.com/api/v3/wema/getUpfrontStatus', { request_id: creditclan_request_id })
      setUpfront(res?.data?.data)
    } catch (error) {
      console.log({ error });
    }
  }

  useEffect(() => {
    getUser();
    getInspectionsDetails();
    getPorperties();
    setglobalLoading(false)
  }, [])

  return (
    <>
      <div className="h-screen flex">
        {globalLoading && (
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
        {!globalLoading && (
          <>
            <div className='p-10 space-y-10'>
              <div className="flex">
                <div>
                  <p className='text-2xl'>Welcome <span className='font-semibold'>{data?.user?.name}</span> 🥳</p>
                </div>
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
                    <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-10 items-start">
                      <div>
                        <>
                          {
                            pendingRequest?.creditclan_request_id && loan && parseFloat(loan?.loan?.offers[0]?.amount) > 0 && loan?.loan?.loan_status === '3' ?
                              <>
                                <div>
                                  <h3 className="text-xl font-medium mb-8 px-1">Active Request</h3>
                                  {
                                    recoveryFilter?.overdueBalances.length > 0 ?
                                      <>
                                        <div className='grid border border-gray-300 rounded-xl overflow-hidden'>
                                          <div className="flex p-5  items-center ">
                                            <div className='my-auto'> <IconHomeSearch size={50} /> </div>
                                            <div className='px-5 overflow-hidden'>
                                              <p className='text-3xl font-semibold'>{formatCurrency(recoveryFilter?.nextPayment)}</p>
                                              <div className="">
                                                <p>Overdue payment </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className='my-5 ml-20 flex space-x-5'>
                                            <Button onClick={() => setOpenMakePayment(true)}>Make Payment</Button>
                                            <Button variant='outlined' onClick={() => setOpenViewProperty(true)} >View Request</Button>
                                          </div>
                                        </div>
                                      </>
                                      :
                                      <>
                                        <div className='grid  border border-gray-300 rounded-xl overflow-hidden'>
                                          <div className="flex p-5  items-center ">
                                            <div className='my-auto'> <IconHomeSearch size={50} /> </div>
                                            <div className='px-5 overflow-hidden'>
                                              <p className='text-3xl font-semibold'>{formatCurrency(recoveryFilter?.nextPayment)}</p>
                                              <div className="">
                                                <p>Next repayment due by {recoveryFilter?.nextPaymentDate} </p>
                                              </div>
                                            </div>
                                          </div>
                                          <div className='my-5 ml-20 flex space-x-5'>
                                            <Button color='white' onClick={() => setOpenMakePayment(true)}>Make Payment</Button>
                                            <Button variant='outlined' color='white' onClick={() => setOpenViewProperty(true)}>View Request</Button>
                                          </div>
                                        </div>
                                      </>
                                  }
                                </div>
                              </>
                              :
                              <>
                                <div>
                                  <h3 className="text-xl font-medium mb-8 px-1">Pending Rent Request</h3>
                                  {pendingRequest && (
                                    <div className='grid border border-gray-300 rounded-xl overflow-hidden'>
                                      <div className="flex p-5  items-center ">
                                        <div className='my-auto'> <IconHomeSearch size={50} /> </div>
                                        <div className='px-5 overflow-hidden'>
                                          <p className='text-xl'>{pendingRequest?.address}</p>
                                          <div className="">
                                            <p className=''> Gbagaga, Lagos</p>
                                            <p>{formatCurrency(pendingRequest?.amount)}</p>
                                          </div>
                                        </div>
                                        <Button className='ml-auto' onClick={() => setOpenViewProperty(true)}>View</Button>
                                      </div>
                                      <div>
                                        <div className="w-full bg-gray-200 rounded-b-xl">
                                          {!pendingRequest?.creditclan_request_id && (
                                            <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounede w-[33%] rounded-b-xl rounded-tr-xl" > Stage 1 / 3</div>
                                          )}
                                          {
                                            pendingRequest?.creditclan_request_id && loan && parseFloat(loan?.loan?.offers[0]?.amount) > 0 && loan?.loan?.loan_status !== '3' && (
                                              <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounede w-[67%] rounded-b-xl rounded-tr-xl" > Stage 2 / 3</div>
                                            )
                                          }
                                          {
                                            pendingRequest?.creditclan_request_id && loan && parseFloat(loan?.loan?.offers[0]?.amount) > 0 && loan?.loan?.loan_status === '3' && (
                                              <div className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounede w-[99%] rounded-b-xl rounded-tr-xl" > Stage 3 / 3</div>
                                            )
                                          }
                                        </div>
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
                              </>
                          }
                        </>
                        <h3 className="text-xl font-medium mb-8 px-1 mt-16"> Inspection Bookings </h3>
                        {inspections && (
                          <>
                            <div className='border border-gray-300 py-2  rounded-xl divide-y divide-gray-300 '>
                              {inspections?.map((m, i) => (
                                <>
                                  <div className="flex py-4 px-8">
                                    <div className="flex">
                                      <div className='my-auto mr-5'> <IconHomeSearch size={30} className='text-cyan-600' /> </div>
                                      <div>
                                        <p>{m?.property?.description}</p>
                                        <p>{(m?.property?.price)}</p>
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
                            <div className="underline text-blue-500 mt-5 cursor-pointer text-right">See all Bookings</div>
                          </>
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
                        <div>
                          <div className="border bg-blue-100 border-blue-200  p-8  rounded-2xl ml-auto">
                            <h3 className="text-lg font-medium mb-5 px-1">Your Credit Limit</h3>
                            {data?.user?.credit_score ?
                              <>
                                <div className="flex justify-between">
                                  <p>Monthly Rent Limit</p>
                                  <p>{formatCurrency(data?.user?.credit_score)}</p>
                                </div>
                                <div className="flex justify-between">
                                  <p>Max Duration</p>
                                  <p>12 month(s)</p>
                                </div>
                              </> :
                              <>
                                <div className="flex justify-between">
                                  <div>
                                    <p>Please check your credit limit</p>
                                    <p>Click the button to proceed</p>
                                  </div>
                                  <Button className='my-auto' variant='outlined' color='black' onClick={() => setOpenCheckOffers(true)} >Check</Button>
                                </div>
                              </>
                            }
                          </div>
                        </div>
                        <div className='mt-3'>
                          <div
                            className="rounded-2xl flex items-start  border-b px-7 py-7 cursor-pointer hover:bg-gray-100"
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
                            className="rounded-2xl flex items-start  border-b px-7 py-7 cursor-pointer hover:bg-gray-100"
                            onClick={() => {
                              if (pendingRequest) {
                                setOpenViewProperty(true)
                              }
                            }}
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
                            className="rounded-2xl flex items-start border-b px-7 py-7 cursor-pointer hover:bg-gray-100"
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
                    <h3 className="text-xl font-medium mb-8 px-1 my-20">Market Place</h3>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                      {properties.splice(0, 6).map((m, i) => (
                        <div key={i}>
                          <ListingsGrid
                            key={i}
                            houseImg={m.image}
                            heading='For Rent'
                            price={m?.price}
                            title={m?.description}
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
      <Drawer isOpen={openViewProperty} onClose={() => setOpenViewProperty(false)} longer={true}>
        <ViewPropertyDetails request={pendingRequest} loan={loan} onClose={() => setOpenViewProperty(false)} upfront={upfront} />
      </Drawer>
      <InspectionDetails isOpen={openViewInspections} onClose={() => setopenViewInspections(false)} inspection={current} />
      <RenewRentDashboard isOpenDrawer={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} />
      <CheckOffers isOpen={openCheckOffers} onClose={() => setOpenCheckOffers(false)} />
      <FoundHouseDashboard isOpenDrawer={isOpenFoundHouse} onClose={() => setIsOpenFoundHouse(false)} />
      {data?.user?.want_this && (
        <WantThis />
      )}
      <MakePayment isOpen={openMakePayment} onClose={() => setOpenMakePayment(false)} recoveryFilter={recoveryFilter} recovery={recovery} />
      {/* <ProDetails isOpen={openPropertyDetails} onClose={handleClose} property={current} /> */}

    </>
  )
}

export default Page;