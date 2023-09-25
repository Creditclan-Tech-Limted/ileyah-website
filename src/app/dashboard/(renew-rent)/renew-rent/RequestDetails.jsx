import { useCheckRentRequestQuery, useGetLoanDetailsQuery } from '@/api/rent';
import ClientOnly from '@/components/ClientOnly';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import Loader from '@/global/Loader'
import { formatCurrency } from '@/lib/utils';
import useSignupStore from '@/store/signup';
import { IconHelp } from "@tabler/icons-react";

const RequestDetails = () => {
  const { data, updateData } = useSignupStore((state) => state);

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
            <div className="text-xl font-medium mb-10">Request summary</div>
            <div className="">
              <div className='space-y-10'>
                <div className='border border-gray-300 rounded-xl p-8'>
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
                </div>

                <div className="gap-10">
                  <div className="border rounded-xl p-8 border-gray-300">
                    <div className="flex justify-between">
                      <p className='text-sm inline-flex'>House Address <IconHelp size={10} className='mt-1 mx-1' /></p>
                      <p>{request?.address || 'N/A'}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className='text-sm inline-flex'>Type of House <IconHelp size={10} className='mt-1 mx-1' /></p>
                      <p>{request?.house_type || 'N/A'}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className='text-sm inline-flex'>Landlord No. <IconHelp size={10} className='mt-1 mx-1' /></p>
                      <p>{request?.landlord_phone || 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default RequestDetails;