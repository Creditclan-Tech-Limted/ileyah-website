import { useCheckRentRequestQuery, useGetLoanDetailsQuery } from '@/api/rent';
import ClientOnly from '@/components/ClientOnly';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import Loader from '@/global/Loader'
import { formatCurrency } from '@/lib/utils';
import useSignupStore from '@/store/signup';
import { IconHelp } from "@tabler/icons-react";
import { useState } from 'react';

const RequestDetails = () => {
  const { data, updateData } = useSignupStore((state) => state);
  const [views, setViews] = useState('ongoing')
  const {
    request,
    isLoading: isRentRequestLoading,
    refetch: refetchRentRequest,
  } = useCheckRentRequestQuery(data?.user?.phone, (data, err) => {
    if (data?.data?.request) {
      updateData({ ...data });
    }
    if (err) return console.log({ err });
    if (!data?.data?.request) return onNext("no-request");
  });
  const {
    data: loan,
    isLoading: isGetLoanDetailsLoading,
    refetch: refetchLoanDetails,
    isFetching: isLoanDetailsRefetching,
  } = useGetLoanDetailsQuery({
    email: data?.user?.email,
    phone: data?.user?.phone,
    request_id: request?.creditclan_request_id,
  });

  const handleEligibilityCancelled = async () => {
    if (!request?.creditclan_request_id) return await refetchRentRequest();
    await refetchLoanDetails();
  };

  const handleEligibilityCompleted = async () => {
    if (!request?.creditclan_request_id) return await refetchRentRequest();
    await refetchLoanDetails();
  };
  return (
    <>
      {
        isRentRequestLoading && (
          <Loader text='Please wait...' />
        )
      }
      {
        !isRentRequestLoading && (
          <>
            {
              views === 'ongoing' && (
                <>
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

                  <div>

                    <Button className='mt-10' onClick={() => setViews('full')} >View Full Request</Button>
                  </div>
                </>
              )
            }
            {
              views === 'full' && (
                <div>
                  <div className=''>
                    {/* <div className='border border-gray-300 rounded-xl p-8'>
                      <div className="flex justify-between">
                        <div>
                          <p className='inline-flex'>Rent Amount <IconHelp size={10} className='mt-2 mx-1' /> </p>
                          <p className='text-3xl font-medium'>{formatCurrency(request?.amount)}</p>
                        </div>
                        <div>
                          {
                            loan?.loan?.stage !== "completed" && (
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
                            )
                          }
                        </div>
                      </div>
                    </div> */}
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
                    <div className="border rounded-2xl mt-5 divide-y">
                      <div className="flex justify-between p-3">
                        <p>Property Name:</p>
                        <p>{data?.want_property?.price}</p>
                      </div>
                      <div className="flex justify-between p-3">
                        <p>Rent :</p>
                        <p>{formatCurrency(data?.want_property?.price)}</p>

                      </div>
                      <div className="flex justify-between p-3">
                        <p>Property Address:</p>
                        <p>{data?.want_property?.address}</p>
                      </div>
                      <div className="flex justify-between p-3">
                        <p>Price:</p>
                        <p>{data?.want_property?.price}</p>
                      </div>
                      <div className="flex justify-between p-3">
                        <p>Area:</p>
                        <p>{data?.want_property?.area}</p>
                      </div>
                      <div className="flex justify-between p-3">
                        <p>Description:</p>
                        <p>{data?.want_property?.description}</p>
                      </div>
                    </div>
                  </div>
                  <ClientOnly className='mt-10'>
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

              )
            }
          </>
        )
      }
    </>
  )
}

export default RequestDetails;