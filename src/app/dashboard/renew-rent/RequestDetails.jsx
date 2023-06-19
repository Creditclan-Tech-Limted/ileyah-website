import { useCheckRentRequestQuery, useGetLoanDetailsQuery } from '@/api/rent';
import ClientOnly from '@/components/ClientOnly';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import Loader from '@/global/Loader'
import { formatCurrency } from '@/lib/utils';
import useSignupStore from '@/store/signup';
import { IconExclamationCircle } from "@tabler/icons-react";
import DashNav from '../DashNav';
import Sidebar from '../Sidebar';

const RequestDetails = () => {
  const { data, updateData } = useSignupStore((state) => state);

  const {
    request,
    isLoading: isRentRequestLoading,
    refetch: refetchRentRequest,
  } = useCheckRentRequestQuery(data?.user?.phone || '09039719017', (data, err) => {
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
    <Sidebar mn   />
      {
        isRentRequestLoading && (
          <Loader text='Please wait...'/>
        )
      }
      {
        !isRentRequestLoading && (
          <>
            <div className="text-xl font-medium mb-10">Request summary</div>
            {
              loan ? (
                <>
                  {
                    loan.loan.stage === 'completed' && (
                      <div
                        className="flex items-center p-4 mb-4 text-green-800 rounded-2xl bg-green-100" role="alert"
                      >
                        <IconExclamationCircle className="mr-2"/>
                        <div>Your request is under review.</div>
                      </div>
                    )
                  }
                  {
                    loan.loan.stage !== "completed" && (
                      <div
                        className="flex items-center p-4 mb-4 text-black rounded-2xl bg-orange-100" role="alert"
                      >
                        <IconExclamationCircle className="mr-2"/>
                        <div>Eligibility Pending...</div>
                      </div>
                    )
                  }
                </>
              ) : (
                <div className="flex p-4 mb-4 text-red-800 rounded-lg bg-red-100" role="alert">
                  <IconExclamationCircle className="mr-2"/>
                  <div>Eligibility not done!</div>
                </div>
              )
            }
            <div className="border border-gray-300 divide-y divide-gray-300 rounded-xl mt-8">
              <div className="flex justify-between items-center px-5 py-2">
                <p>Rent Amount:</p>
                <p> { formatCurrency(request?.amount) }</p>
              </div>
              <div className="flex justify-between items-center px-5 py-2">
                <p>House Address:</p>
                <p>{ request?.address }</p>
              </div>
              <div className="flex justify-between items-center px-5 py-2">
                <p>Type of House:</p>
                <p>{ request?.house_type || 'N/A' }</p>
              </div>
              <div className="flex justify-between items-center px-5 py-2">
                <p>Landlord phone number:</p>
                <p>{ request?.landlord_phone || 'N/A' }</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-10">
              {
                loan?.loan?.stage !== "completed" && (
                  <ClientOnly>
                    <LaunchEligibilityWidget
                      onReady={ () => setLoading("false") }
                      request={ request }
                      onCancel={ handleEligibilityCancelled }
                      onCompleted={ handleEligibilityCompleted }
                      className="w-100"
                    >
                      <Button>Get funded</Button>
                    </LaunchEligibilityWidget>
                  </ClientOnly>
                )
              }
              {
                request?.approval_step === "0" && (
                  <Button color="red" variant="outlined">Cancel Request</Button>
                )
              }
            </div>
            {/* <div className='flex w-screen'>
              <img src="/assets/images/happy.png" alt="" className='bottom-0 absolute mx-[100px]' />
            </div> */}
          </>
        )
      }
    </>
  )
}

export default RequestDetails;
