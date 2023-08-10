'use client'
import Button from '@/components/global/Button';
import useSignupStore from '@/store/signup';
import { IconChevronDownLeft, IconChevronRight, IconPlus } from '@tabler/icons-react';
import AddNewStaff from './modals/AddNewStaff';
import { useState } from 'react';

const Page = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const [openAddNewStaff, setOpenAddNewStaff] = useState(false)
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

  console.log({ data });
  return (
    <>
      <div className="w-full">
        <div className="md:flex justify-between">
          <div className='text-4xl font-bold'>
            Welcome, {data?.user?.fullname || 'Ileyah hq'} 👋🏿
          </div>
          <Button onClick={() => setOpenAddNewStaff(true)} leftIcon={<IconPlus />} size='xs' className='my-5 md:my-0 ml-auto'  >Add New Staff</Button>
        </div>

        <div className='w-screen md:w-full'>
          <div className="mt-10 w-screen md:w-full">
            <div className="bg-white shadow border rounded-[1.2rem] transition-all duration-300 relative overflow-x-auto">
              <table className="w-full text-[.95rem] text-left">
                <thead className="text-gray-500 border-b border-slate-200">
                  <tr>
                    <th scope="col" className="px-6 py-4">Name</th>
                    <th scope="col" className="px-6 py-4">Phone</th>
                    <th scope="col" className="px-6 py-4">Email</th>
                    <th scope="col" className="px-6 py-4">Amount</th>
                    <th scope="col" className="px-6 py-4">Department</th>
                    <th scope="col" className="px-6 py-4">Status </th>
                    <th scope="col" className="px-6 py-4">Date </th>
                    <th scope="col" className="px-6 py-4">Action </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
                      <tr className="hover:bg-gray-50 cursor-pointer select-none border-b" key={i}>
                        <td scope="row" className="px-6 py-4 whitespace-nowrap">Oyegbile Praise </td>
                        <td className="px-6 py-4 whitespace-nowrap">+234 903 9719 017</td>
                        <td className="px-6 py-4 whitespace-nowrap">praise@ileyah.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">N1,000,000</td>
                        <td className="px-6 py-4 whitespace-nowrap">Technology</td>
                        <td className="px-6 py-4">
                          {i !== 1 ? <div className="px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-red-500 !text-red-500">Failed Eligibility</div> : <div className="px-2.5 py-1 leading-none inline-block rounded-full border border-gray-600 text-gray-600 !border-green-500 !text-green-500">Approved</div>}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">12th Jul, 2023</td>
                        <td> <Button size='xs' variant='outlined'> Details </Button> </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between px-6 py-2">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">97</span> results
                  </p>
                </div>
                <div>
                  <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Previous</span>
                      <IconChevronDownLeft className="h-5 w-5" aria-hidden="true" />
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="relative z-10 inline-flex items-center bg-primary-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                      3
                    </a>
                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                      ...
                    </span>
                    <a
                      href="#"
                      className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                    >
                      8
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      9
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      10
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    >
                      <span className="sr-only">Next</span>
                      <IconChevronRight className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddNewStaff isOpen={openAddNewStaff} onClose={handleClose} />
    </>
  )
}

export default Page;