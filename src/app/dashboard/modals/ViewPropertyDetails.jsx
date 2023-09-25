import ClientOnly from '@/components/ClientOnly';
import Drawer from '@/components/Drawer';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import { capitalizeFirstLetter, formatCurrency } from '@/lib/utils';
import React from 'react'

const ViewPropertyDetails = ({ isOpen, onClose, property, request }) => {
  const handleEligibilityCancelled = async () => {
    if (!request?.creditclan_request_id) return await refetchRentRequest();
    await refetchLoanDetails();
  };

  const handleEligibilityCompleted = async () => {
    if (!request?.creditclan_request_id) return await refetchRentRequest();
    await refetchLoanDetails();
  }; return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} title='Request Details'>
        {!request?.eligibility_link && !request?.creditclan_request_id && (
          <>
            <p> You have an on-going request. <br /> Click on <b className='font-bold'>Continue</b> to proceed with your application. </p>
            <p>Contact us on our support lines if you require any assistance.</p>
          </>

        )}
        {request?.eligibility_link && !request?.creditclan_request_id && (
          <>
            <p> You have an on-going request. <br /> Click on <b>Continue</b> to proceed with your application. </p>
            <p>Contact us on our support lines if you require any assistance.</p>
          </>
        )}

        {request?.eligibility_link && request?.creditclan_request_id && (
          <p className=''>You have a pending request that is under review. <br /> Contact us on our support lines if you require any assistance.</p>
        )}

        <div className="font-17 border border-gray-300 rounded-xl mt-5">
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
        <div className='mt-10'>
          <div>
            <ClientOnly>
              <LaunchEligibilityWidget
                onReady={() => setLoading("false")}
                request={request}
                onCancel={handleEligibilityCancelled}
                onCompleted={handleEligibilityCompleted}
                className="w-100"
              >
                <Button>Get funded</Button>
              </LaunchEligibilityWidget>
            </ClientOnly>
          </div>
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