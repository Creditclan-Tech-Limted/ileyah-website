import Drawer from '@/components/Drawer';
import { capitalizeFirstLetter, formatCurrency } from '@/lib/utils';
import React from 'react'

const ViewPropertyDetails = ({ isOpen, onClose, property, request }) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Property Details'>
        <div className="font-17 border border-gray-300 rounded-xl">
          <ul className="">
            <li className="flex justify-between items-center border-b p-3">
              Rent amount:
              <span className=" text-right">
                {formatCurrency(request?.amount) || 'N/A'}
              </span>
            </li>
            <li className="flex justify-between items-center border-b p-3">
              Type of house:
              <span className="text-right">
                {capitalizeFirstLetter(request?.house_type) || 'N/A'}
              </span>
            </li>
            <li className="flex justify-between items-center border-b p-3">
              Address:
              <span className="text-right">
                {request?.address || 'N/A'}
              </span>
            </li>
            <li className="flex justify-between items-center p-3">
              Landlord phone number:
              <span className="text-right">
                {request?.landlord_phone || "Not provided"}
              </span>
            </li>
          </ul>
        </div>
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ad amet tempore incidunt, voluptatum, architecto quia quis possimus, repellat at voluptatem accusantium necessitatibus aut et pariatur tempora repellendus dolores? Voluptas! */}
      </Drawer>
    </>
  )
}

export default ViewPropertyDetails;
// Title
// Location (LGA, LCDA, State)
// Type

// First year rent
// Annual Rent
// Service Charge
// Other Charge

// Name:
// Bank:
// Account:

// Credit Type (First Year, Renewal)
// Credit Amount