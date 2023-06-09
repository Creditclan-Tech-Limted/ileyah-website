import { useCheckRentRequestQuery, useGetLoanDetailsQuery } from '@/api/rent';
import ClientOnly from '@/components/ClientOnly';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import Loader from '@/global/Loader'
import { formatCurrency } from '@/lib/utils';
import useSignupStore from '@/store/signup';

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
    email: data?.user?.email || 'oluwadhammueh@gmail.com',
    phone: data?.user?.phone || '09039719017',
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
      <Loader loading={isRentRequestLoading} text='Please wait...' />
      {!isRentRequestLoading && (
        <div className='h-screen'>
          <div className='text-center text-2xl'> Request Details </div>
          {loan ? (
            <>
              {loan.loan.stage === 'completed' && (
                <div class="flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100" role="alert">
                  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Info</span>
                  <div> Your request is under review.
                  </div>
                </div>
              )}
              {loan.loan.stage !== "completed" && (
                <div class="flex p-4 mb-4 text-sm text-black rounded-lg bg-yellow-100" role="alert">
                  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Info</span>
                  <div>
                    Eligibility Pending...
                  </div>
                </div>
              )}
            </>
          ) : <>
            <div class="flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Info</span>
              <div>
                <span class="font-medium">Eligibility not done!</span>.
              </div>
            </div>
          </>}
          <div className='space-y-5 mt-10'>
            <div className='flex justify-between'>
              <p>Rent Amount:</p>
              <p>  {formatCurrency(request?.amount)}</p>
            </div>
            <div className='flex justify-between'>
              <p>House Address:</p>
              <p>{request?.address}</p>
            </div>
            <div className='flex justify-between'>
              <p>Type of House:</p>
              <p>{request?.house_type || 'N/A'}</p>
            </div>
            <div className='flex justify-between'>
              <p>Landlord phone number:</p>
              <p>{request?.landlord_phone || 'N/A'}</p>
            </div>
            <div className='flex justify-between'>
              {loan?.loan?.stage !== "completed" && (
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
              )}
              {request?.approval_step === "0" && (
                // <button
                //   onClick={() => onNext("cancel-request")}
                //   type="submit"
                //   className="btn btn-block btn-outline-gray btn-xs mt-3"
                // >
                //   Cancel request
                // </button>
                <Button color='red'>Cancel Request</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RequestDetails;