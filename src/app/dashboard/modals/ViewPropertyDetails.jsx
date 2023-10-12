import { useCancelCcRequestMutation, useCancelRequestMutation } from '@/api/rent';
import ClientOnly from '@/components/ClientOnly';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import { useToast } from '@/lib/use-toast';
import { capitalizeFirstLetter, formatCurrency } from '@/lib/utils';
import useSignupStore from '@/store/signup';

const ViewPropertyDetails = ({ isOpen, onClose, loan, request }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const { mutateAsync: cancelRequest, isLoading: isCancelRequestLoading } = useCancelRequestMutation();
  const { mutateAsync: cancelCcRequest, isLoading: isCancelCcRequestLoading } = useCancelCcRequestMutation();

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

  return (
    <>
      {loan && parseFloat(loan?.loan?.offers[0]?.amount) > 0 ? (
        <>
          <p>
            You have a pending request with an offer, <br /> Please check details below
          </p>
          <div class="my-5">
            <div class="text-center items-center justify-center">
              <div class="border-gray-300 rounded-2xl border-2 divide-y">
                <p class="flex justify-between p-3">
                  <div>Rent:</div>
                  <div v-if="loan_details">{formatCurrency(request?.amount)}</div>
                </p>
                <div class="flex justify-between p-3">
                  <div>Upfront:</div>
                  <div v-if="loan_details">{loan?.loan?.offers[0]?.upfront}</div>
                </div>
                <div class="flex justify-between p-3">
                  <div>Monthly Repayments:</div>
                  <div v-if="loan_details">{loan?.loan?.offers[0]?.monthly_repayment}</div>
                </div>
                <div class="flex justify-between p-3">
                  <div>Duration:</div>
                  <div v-if="loan_details">12 Month(s)</div>
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
      ) : <div>
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
      </div>}

    </>
  )
}

export default ViewPropertyDetails;