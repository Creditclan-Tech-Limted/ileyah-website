'use client'
import Button from '@/components/global/Button';
import SimpleDropdown from '@/global/SimpleDropdown';
import { formatCurrency } from '@/lib/utils';
import { IconChevronDown, IconChevronDownLeft, IconChevronRight, IconLogout, IconPlus } from '@tabler/icons-react';
import classNames from 'classnames';
import AddNewLoan from './modals/AddNewLoan';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoanDetails from './modals/LoanDetails';

const Page = ({ className }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [properties, setProperties] = useState([]);
  const [openLoanDetails, setOpenLoanDetails] = useState(false);
  const [current, setCurrent] = useState()

  const getPorperties = async () => {
    try {
      const res = await axios.get(
        'https://kuda-creditclan-api.herokuapp.com/agents/getAllIleyahLoans'
      )
      setProperties(res?.data?.data)
    } catch (error) {
      console.log({ error });
    }
  }

  const { data, isLoading, error } = useQuery(['loans'], getPorperties);

  const handleLogout = () => {
    localStorage.removeItem('ileyah_token');
    router.push('/login')
  };
  return (
    <>
      <>
        <div className="flex">
          <div>
            <p className='text-2xl font-semibold'>Tenants</p>
          </div>
          <div className='ml-auto'>
            <SimpleDropdown
              trigger={
                <div className="flex items-center">
                  <img
                    src={`https://ui-avatars.com/api/?name=IL`}
                    className={classNames('w-8 h-8 rounded-full', className)}
                    alt={`IL`}
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

        <div>
          <div className="flex justify-between mt-[40px]">
            <div className='w-[400px]'>
              <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search properties..." required />
              </div>
            </div>
            <div>
              <Button leftIcon={<IconPlus />} onClick={() => setOpenDrawer(true)} >New Property</Button>
            </div>
          </div>

          <div className='bg-white shadow border rounded-[1.2rem] transition-all duration-300 relative overflow-x-auto mt-6'>
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
                    Duration
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Status{' '}
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Disb. Date{' '}
                  </th>
                  <th scope='col' className='px-6 py-4'>
                    Action{' '}
                  </th>
                </tr>
              </thead>
              <tbody>
                {properties?.map((item, i) => (
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
                      {item?.email || 'N/A'}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {formatCurrency(item?.amount)}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      12
                    </td>
                    <td className='px-6 py-4'>
                      <div className='px-2.5 py-1 leading-none inline-block rounded-full border !border-green-500 !text-green-500'>
                        Active
                      </div>
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap'>
                      {item?.date_disbursed}
                    </td>
                    <td>
                      {' '}
                      <Button size='xs' variant='outlined' onClick={() => {
                        setCurrent(item)
                        setOpenLoanDetails(true)
                      }}>
                        {' '}
                        View{' '}
                      </Button>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
      <AddNewLoan isOpen={openDrawer} onClose={() => setOpenDrawer(false)} />
      {
        openLoanDetails && (
          <LoanDetails isOpen={openLoanDetails} onClose={() => setOpenLoanDetails(false)} details={current} />
        )
      }
    </>
  )
}

export default Page;