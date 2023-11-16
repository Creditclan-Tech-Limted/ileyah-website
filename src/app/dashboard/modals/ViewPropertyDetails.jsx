import { useCancelCcRequestMutation, useCancelRequestMutation } from '@/api/rent';
import ClientOnly from '@/components/ClientOnly';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import { useToast } from '@/lib/use-toast';
import { capitalizeFirstLetter, formatCurrency } from '@/lib/utils';
import useSignupStore from '@/store/signup';
import { IconX } from '@tabler/icons-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ViewPropertyDetails = ({ isOpen, onClose, loan, request, upfront }) => {
  console.log({request});
  const { data, updateData } = useSignupStore((state) => state);
  const { mutateAsync: cancelRequest, isLoading: isCancelRequestLoading } = useCancelRequestMutation();
  const { mutateAsync: cancelCcRequest, isLoading: isCancelCcRequestLoading } = useCancelCcRequestMutation();
  const [views, setViews] = useState('schedules');
  const [schedules, setSchedules] = useState();
  const [recovery, setRecovery] = useState([]);

  const toast = useToast();

  const handleCancelRequest = async () => {
    try {
      await cancelRequest(data.user.phone);
      if (request?.creditclan_request_id) {
        await cancelCcRequest(request.creditclan_request_id);
      }
      toast.success('Req Cancceld');
      onClose()
      // onDone();
      // await queryClient.clear();
    } catch (e) {
      console.log({ e });
    }
  };

  const getRecoveryInfo = async (creditclan_request_id) => {
    try {
      const res = await axios.post('https://mobile.creditclan.com/api/v3/loan/recovery', { creditclan_request_id: request.creditclan_request_id }, { headers: { 'x-api-key': 'WE4mwadGYqf0jv1ZkdFv1LNPMpZHuuzoDDiJpQQqaes3PzB7xlYhe8oHbxm6J228' } });
      setSchedules(res?.data?.data?.currentLoan[0]?.schedules)
      setRecovery(res?.data?.data)
      console.log(recovery);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleEligibilityCancelled = async () => {
    toast.success('Eligibility Canceled');
    if (!request?.creditclan_request_id) return await refetchRentRequest();
    await refetchLoanDetails();
  };

  const handleEligibilityCompleted = async () => {
    toast.success('Eligibility Completed');
    if (!request?.creditclan_request_id) return await refetchRentRequest();
    await refetchLoanDetails();
  };

  useEffect(() => {
    getRecoveryInfo()
  }, [])

  return (
    <>
      {
        loan && (
          <>
            {loan && parseFloat(loan?.loan?.offers[0]?.amount) > 0 && (
              <>
                {
                  loan?.loan?.loan_status === '3' ?
                    <>
                      <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-semibold">Active Request</h3>
                        <Button
                          onClick={onClose} rounded icon={<IconX size="20" />}
                          size="sm" color="red" variant="outlined"
                        > <IconX /> </Button>
                      </div>
                      <hr className='mt-5' />
                      <div className="grid grid-cols-4 gap-10 mt-5">
                        <div className={views === 'bio' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('bio')}>Details</div>
                        <div className={views === 'schedules' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('schedules')} >Schedules</div>
                        <div className={views === 'payments' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('payments')}  >Payments</div>
                        <div className={views === 'repay-info' ? 'rounded-full px-4 py-2 bg-black text-white text-center cursor-pointer' : 'rounded-full px-4 py-2 text-center cursor-pointer'} onClick={() => setViews('repay-info')} >Repay. Info</div>
                      </div>

                      {
                        views === 'upfront' && (
                          <>
                            <div className="my-5">
                              <div className="text-center items-center justify-center">
                                <div className="border-gray-300 rounded-2xl border-2 divide-y">
                                  <p className="flex justify-between p-3">
                                    <div>Amount:</div>
                                    <div>{formatCurrency(upfront?.transaction_payload?.amount)}</div>
                                  </p>
                                  <div className="flex justify-between p-3">
                                    <div>Customer Name:</div>
                                    <div>{upfront?.transaction_payload?.originatorname}</div>
                                  </div>
                                  <div className="flex justify-between p-3">
                                    <div>Customer Account  Number:</div>
                                    <div>{upfront?.transaction_payload.originatoraccountnumber}</div>
                                  </div>
                                  <div className="flex justify-between p-3">
                                    <div>Ileyah Account:</div>
                                    <div>{upfront?.transaction_payload?.craccount}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      }

                      {
                        views === 'bio' && (
                          <div className="my-5">
                            <div className="text-center items-center justify-center">
                              <div className="border-gray-300 rounded-2xl border-2 divide-y">
                                <p className="flex justify-between p-3">
                                  <div>Rent:</div>
                                  <div>{formatCurrency(request?.amount)}</div>
                                </p>
                                <div className="flex justify-between p-3">
                                  <div>Upfront:</div>
                                  <div>{loan?.loan?.offers[0]?.upfront}</div>
                                </div>
                                <div className="flex justify-between p-3">
                                  <div>Monthly Repayments:</div>
                                  <div>{loan?.loan?.offers[0]?.monthly_repayment}</div>
                                </div>
                                <div className="flex justify-between p-3">
                                  <div>Duration:</div>
                                  <div>12 Month(s)</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      }

                      {
                        views === 'repay-info' && (
                          <>
                            <div className="my-5">
                              <div className="text-center items-center justify-center">
                                <div className="border-gray-300 rounded-2xl border-2 divide-y">
                                  <div className="flex justify-between p-3">
                                    <div>Account Number:</div>
                                    <div>{recovery?.customer?.account_number}</div>
                                  </div>
                                  <div className="flex justify-between p-3">
                                    <div>Bank name:</div>
                                    <div>{'WEMA'}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      }

                      {
                        views === 'schedules' && (
                          <>
                            <div className='mt-5'>
                              <table className="w-full text-sm text-left text-gray-500 shadow-md">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                  <tr>
                                    <th scope="col" className="px-6 py-3">Date</th>
                                    <th scope="col" className="px-6 py-3">Repayment</th>
                                    <th scope="col" className="px-6 py-3">Fines</th>
                                    <th scope="col" className="px-6 py-3">Paid</th>
                                    <th scope="col" className="px-6 py-3">Balance</th>
                                  </tr>
                                </thead>
                                {
                                  schedules?.map((item, i) => (
                                    <tr key={i}>
                                      <td className="px-6 py-4">
                                        {item.repayment_date}
                                      </td>
                                      <td className="px-6 py-4">
                                        {(+item.term_repayment || 0).toFixed(2)}
                                      </td>
                                      <td className="px-6 py-4">{(+item.total_fines_so_far || 0).toFixed(2)}</td>
                                      <td className="px-6 py-4">
                                        {(+item.how_much_paid || 0).toFixed(2)}
                                      </td>
                                      <td className="px-6 py-4">
                                        {(+item.how_much_remaining || 0).toFixed(2)}
                                      </td>
                                    </tr>
                                  ))
                                }
                              </table>
                            </div>

                          </>
                        )
                      }

                      {
                        views === 'payments' && (
                          <>
                            <div className="mt-5">
                              <table v-if="response?.payments?.length" className="w-full text-sm text-left text-gray-500 shadow-md">
                                {recovery?.payments.length === 0 && (
                                  <>
                                    <div className='text-cemter flex justify-center p-10 w-full'>
                                      No Payment yet
                                    </div>
                                  </>
                                )}
                                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                  <tr className="text-center border">
                                    <th scope="col" className="px-6 py-3 text-left">Amount</th>
                                    <th scope="col" className="px-6 py-3 text-end">Date</th>
                                  </tr>
                                </thead>
                                {
                                  recovery?.payments.map((item, i) => (
                                    <tr key="item.repayment_date">
                                      <td className="px-6 py-4">
                                        {formatCurrency(+ item.amount || 0)}
                                      </td>
                                      <td className="px-6 py-4 text-end">
                                        {item.date_added.slice(0, 10)}
                                      </td>
                                    </tr>
                                  )
                                  )
                                }
                              </table>
                            </div>
                          </>
                        )
                      }
                    </>
                    :
                    <>
                      {
                        upfront ?
                          <>
                            <div className="flex items-center justify-between mb-10">
                              <h3 className="text-xl font-semibold">Under Review</h3>
                              <Button
                                onClick={onClose} rounded icon={<IconX size="20" />}
                                size="sm" color="red" variant="outlined"
                              > <IconX /> </Button>
                            </div>
                            <p>
                              You application is under review, <br />
                            </p>
                            <div className="my-5">
                              <div className="text-center items-center justify-center">
                                <div className="border-gray-300 rounded-2xl border-2 divide-y">
                                  <p className="flex justify-between p-3">
                                    <div>Rent:</div>
                                    <div>{formatCurrency(request?.amount)}</div>
                                  </p>
                                  <div className="flex justify-between p-3">
                                    <div>Upfront:</div>
                                    <div>{loan?.loan?.offers[0]?.upfront}</div>
                                  </div>
                                  <div className="flex justify-between p-3">
                                    <div>Monthly Repayments:</div>
                                    <div>{loan?.loan?.offers[0]?.monthly_repayment}</div>
                                  </div>
                                  <div className="flex justify-between p-3">
                                    <div>Duration:</div>
                                    <div>12 Month(s)</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                          :
                          <>
                            <div className="flex items-center justify-between mb-10">
                              <h3 className="text-xl font-semibold">Offer</h3>
                              <Button
                                onClick={onClose} rounded icon={<IconX size="20" />}
                                size="sm" color="red" variant="outlined"
                              > <IconX /> </Button>
                            </div>
                            <p>
                              We have an offer for you. Find the details below.
                            </p>
                            <div className="my-5">
                              <div className="text-center items-center justify-center">
                                <div className="border-gray-300 rounded-2xl border-2 divide-y">
                                  <p className="flex justify-between p-3">
                                    <div>Rent:</div>
                                    <div>{formatCurrency(request?.amount)}</div>
                                  </p>
                                  <div className="flex justify-between p-3">
                                    <div>Upfront:</div>
                                    <div>{loan?.loan?.offers[0]?.upfront}</div>
                                  </div>
                                  <div className="flex justify-between p-3">
                                    <div>Monthly Repayments:</div>
                                    <div>{loan?.loan?.offers[0]?.monthly_repayment}</div>
                                  </div>
                                  <div className="flex justify-between p-3">
                                    <div>Duration:</div>
                                    <div>12 Month(s)</div>
                                  </div>
                                </div>
                              </div>
                            </div>
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
                          </>
                      }
                    </>
                }
              </>
            )}
            {loan && parseFloat(loan?.loan?.offers[0]?.amount) == 0 && (
              <>
                <p>
                  Sorry, We can not generate an offer for you <br />
                  <p>Contact us on our support lines if you require any assistance.</p>
                </p>
                <div className="my-5">
                  <div className="text-center items-center justify-center">
                    <div className="border-gray-300 rounded-2xl border-2 divide-y">
                      <p className="flex justify-between p-3">
                        <div>Rent:</div>
                        <div>{formatCurrency(request?.amount)}</div>
                      </p>
                      <div className="flex justify-between p-3">
                        <div>Upfront:</div>
                        <div>{loan?.loan?.offers[0]?.upfront}</div>
                      </div>
                      <div className="flex justify-between p-3">
                        <div>Monthly Repayments:</div>
                        <div>{loan?.loan?.offers[0]?.monthly_repayment}</div>
                      </div>
                      <div className="flex justify-between p-3">
                        <div>Duration:</div>
                        <div>12 Month(s)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )
      }
      {
        !loan && (
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-semibold">Ongoing Request</h3>
              <Button
                onClick={onClose} rounded icon={<IconX size="20" />}
                size="sm" color="red" variant="outlined"
              > <IconX /> </Button>
            </div>
            <>
              <p> You have an on-going request. Find details below</p>
            </>
            <div className="font-17 border border-gray-300 rounded-xl mt-5">
              <ul className="">
                <li className="flex justify-between items-center border-b p-3">
                  Rent :
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
            <div className='mt-10 flex justify-between'>
              <div>
                {!request?.creditclan_request_id && (
                  <Button variant='outlined' color='red' onClick={handleCancelRequest} loading={isCancelRequestLoading} >Cancel Request </Button>
                )}
              </div>
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
        )
      }
      {/* {loan && parseFloat(loan?.loan?.offers[0]?.amount) > 0 ? (
        <>
          <p>
            You have a pending request with an offer, <br /> Please check details below
          </p>
          <div className="my-5">
            <div className="text-center items-center justify-center">
              <div className="border-gray-300 rounded-2xl border-2 divide-y">
                <p className="flex justify-between p-3">
                  <div>Rent:</div>
                  <div>{formatCurrency(request?.amount)}</div>
                </p>
                <div className="flex justify-between p-3">
                  <div>Upfront:</div>
                  <div>{loan?.loan?.offers[0]?.upfront}</div>
                </div>
                <div className="flex justify-between p-3">
                  <div>Monthly Repayments:</div>
                  <div>{loan?.loan?.offers[0]?.monthly_repayment}</div>
                </div>
                <div className="flex justify-between p-3">
                  <div>Duration:</div>
                  <div>12 Month(s)</div>
                </div>
              </div>
            </div>
          </div>
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
        </>
      ) :
        <div>
          <>
            <p> You have an on-going request. <br />
              Click on <b className='font-bold'>Continue</b> to proceed with your application. </p>
            <p>Contact us on our support lines if you require any assistance.</p>
          </>
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
          <div className='mt-10 flex justify-between'>
            <div>
              {!request?.creditclan_request_id && (
                <Button variant='outlined' color='red' onClick={handleCancelRequest} loading={isCancelRequestLoading} >Cancel Request </Button>
              )}
            </div>
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
      } */}
    </>
  )
}

export default ViewPropertyDetails;