'use client'
import Button from '@/components/global/Button'
import { IconHeartFilled, IconMapPinFilled, IconPlus } from '@tabler/icons-react'
import AddNewProperty from './Modals/AddNewProperty'
import useSignupStore from '@/store/signup'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import UserInfor from '@/api/UserInfor'
import { formatCurrency } from '@/lib/utils'
import { useSearchParams } from 'next/navigation'

const Page = () => {
  const router = useSearchParams().get('r');
  const { data } = useSignupStore((state) => state);
  const [openAddNewStaff, setOpenAddNewStaff] = useState(false);
  const [property, setProperty] = useState([]);
  const userId = UserInfor().userId
  const [staff, setStaff] = useState({
    open: false,
    staff: ''
  });

  const handleClose = async () => {
    try {
      setOpenAddNewStaff(false)
    } catch (error) {
      console.log({ error });
    }
  }

  const fetchData = async () => {
    try {
      const res = await axios.post('https://lendnode.creditclan.com/kuda/agents/getAgentProperty', { landlordAgentId: userId })
      return res?.data?.data?.reverse()
    } catch (error) {
      console.log({ error });
    }
  }

  const { data: userData, isLoading } = useQuery(['data'], fetchData);


  return (
    <>
      <div className='flex justify-between'>
        <div>
          <div className='text-4xl font-bold'>
            Hey, {data?.user?.name} 👋🏿
          </div>
        </div>
        <div>
          <Button onClick={() => setOpenAddNewStaff(true)} size='sm' leftIcon={<IconPlus />}>New</Button>
        </div>
      </div>
      {isLoading && (
        <>
          <div role="status" className="max-w-sm p-4  rounded shadow animate-pulse md:p-6">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4 space-x-3">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>

          <div role="status" className="max-w-sm p-4  rounded shadow animate-pulse md:p-6">
            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div className="flex items-center mt-4 space-x-3">
              <svg className="w-10 h-10 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              <div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </>
      )}
      <div className='mt-10 mb-10'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
          {userData?.map((user, i) => (
            <div className=' bg-white shadow-lg rounded-xl p-1' key={i}>
              <div className='bg-cover h-52 p-2' style={{ backgroundImage: `url(${user?.image[0]})`, borderRadius: '10px' }}>
                <div className="bg-green-500 w-[50px] text-center text-white rounded-xl">
                  Rent
                </div>
              </div>
              <div className='p-3 space-y-2'>
                <p className='font-bold text-xl flex justify-between'>
                  <div className='text-black'>{formatCurrency(user?.amount)} </div>
                  <div className='bg-red-100 p-2 rounded-full'><IconHeartFilled size='15' className='text-red-500' /></div>
                </p>
                <p className='font-bold'>  {user?.name}</p>
                <p className='inline-flex text-sm text-gray-400' > <IconMapPinFilled color='red' size={15} className='mr-2' /> {user?.address} </p>
                <hr />
                {/* <p className='flex space-x-3'>
                    <div className='inline-flex'><IconBath /> 2 </div>
                    <div className='inline-flex'><IconBed /> 4 </div>
                  </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}

      <AddNewProperty isOpen={openAddNewStaff} onClose={handleClose} refferal_code={router} />
    </>
  )
}

export default Page;