import { useCheckRentRequestQuery } from '@/api/rent';
import Drawer from '@/components/Drawer';
import React, { useEffect } from 'react'

const LoanDetails = ({ isOpen, onClose, details }) => {
  
  const {
    request,
    isLoading: isRentRequestLoading,
  } = useCheckRentRequestQuery(details?.phone, (data, err) => {
    console.log(data?.data?.request);
  });

  return (
    <>
      <Drawer title='Loan Details' isOpen={isOpen} onClose={onClose} longer={true}>
        <div>
          <div className="grid grid-cols-4 gap-10">
            <div className='rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer'>Bio Data</div>
            <div className='px-4 py-2 text-gray-400'>Schedules</div>
            <div className='px-4 py-2 text-gray-400'>Payments</div>
            <div className='px-4 py-2 text-gray-400'>Comments</div>
          </div>

          <hr className='mt-5' />

          <div className='mt-5 divide-y border rounded-xl'>
            <div className="flex justify-between p-4">
              <p>Name</p>
              <p>Name</p>
            </div>
            <div className="flex justify-between p-4">
              <p>Email</p>
              <p>Name</p>
            </div>
            <div className="flex justify-between p-4">
              <p>Phone</p>
              <p>Name</p>
            </div>
            <div className="flex justify-between p-4">
              <p>DOB</p>
              <p>Name</p>
            </div>
            <div className="flex justify-between p-4">
              <p>Gender</p>
              <p>Name</p>
            </div>
            <div className="flex justify-between p-4">
              <p>Marital Status</p>
              <p>Name</p>
            </div>
            <div className="flex justify-between p-4">
              <p>BVN</p>
              <p>Name</p>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default LoanDetails;