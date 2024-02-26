'use client'
import Button from '@/components/global/Button'
import useSignupStore from '@/store/signup'
import {
  IconChevronDownLeft,
  IconChevronRight,
  IconPlus,
} from '@tabler/icons-react'
import AddNewStaff from './modals/AddNewStaff'
import { useState } from 'react'
import UserInfor from '@/api/UserInfor'
import { useToast } from '@/lib/use-toast'
import { useGetStaff } from '@/api/action'


const Page = () => {
  let companyId = UserInfor().userId
  const { data, updateData } = useSignupStore((state) => state)
  const [openAddNewStaff, setOpenAddNewStaff] = useState(false)
  const { data: staffData, isLoading: loading } = useGetStaff(companyId)
    const toast = useToast()
  const [staff, setStaff] = useState({
    open: false,
    staff: '',
  })
  let companyName = UserInfor().userName

  const handleClose = async () => {
    try {
      setOpenAddNewStaff(false)
    } catch (error) {
      console.log({ error })
    }
  }


  return (
    <>
      <div className='w-full'>
        <div className='md:flex justify-between'>
          <div className='text-4xl font-bold'>
            Welcome, {companyName || 'Ileyah hq'} 👋🏿
          </div>
          <Button
            onClick={() => setOpenAddNewStaff(true)}
            leftIcon={<IconPlus />}
            size='xs'
            className='my-5 md:my-0 ml-auto'
            color='black'
            variant='outlined'
          >
            Invite a Staff
          </Button>
        </div>

        <div className='w-screen md:w-full'>
          <div className='mt-10 w-screen md:w-full'>
              {loading ? (
                <div role='status' className='max-wsm animate-pulse'>
                  <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                  <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5'></div>
                  <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                  <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5'></div>
                  <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700  mb-2.5'></div>
                  <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 '></div>
                  <span className='sr-only'>Loading...</span>
                </div>
              ): 
              <>
            <div className='bg-white shadow border rounded-[1.2rem] transition-all duration-300 relative overflow-x-auto'>
              <table className='w-full text-[.95rem] text-left'>
                <thead className='text-gray-500 border-b border-slate-200'>
                  <tr>
                    <th scope='col' className='px-6 py-4'>
                      Name
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Phone
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Email
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Amount
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Department
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Status{' '}
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Date{' '}
                    </th>
                    <th scope='col' className='px-6 py-4'>
                      Action{' '}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {staffData?.data?.data?.map((item, i) => (
                    <tr
                      className='hover:bg-gray-50 cursor-pointer select-none border-b'
                      key={i}
                    >
                      <td scope='row' className='px-6 py-4 whitespace-nowrap'>
                        {item?.name}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {item?.phone}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {item?.email}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {item?.salary}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        {item?.salary}
                      </td>
                      <td className='px-6 py-4'>
                        {i !== 1 ? (
                          <div className='px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-red-500 !text-red-500'>
                            Failed Eligibility
                          </div>
                        ) : (
                          <div className='px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-green-500 !text-green-500'>
                            Approved
                          </div>
                        )}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        12th Jul, 2023
                      </td>
                      <td>
                        {' '}
                        <Button size='xs' variant='outlined'>
                          {' '}
                          Details{' '}
                        </Button>{' '}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
              </>
              }
          </div>
        </div>
      </div>

      <AddNewStaff isOpen={openAddNewStaff} onClose={handleClose} />
    </>
  )
}

export default Page