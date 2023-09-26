import { useCancelCcRequestMutation, useCancelRequestMutation } from '@/api/rent';
import ClientOnly from '@/components/ClientOnly';
import Button from '@/components/global/Button';
import LaunchEligibilityWidget from '@/components/sign-up/LaunchEligibilityWidget';
import { capitalizeFirstLetter, formatCurrency } from '@/lib/utils';
import useSignupStore from '@/store/signup';

const ViewPropertyDetails = ({ isOpen, onClose, property, request }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const { mutateAsync: cancelRequest, isLoading: isCancelRequestLoading } = useCancelRequestMutation();
  const { mutateAsync: cancelCcRequest, isLoading: isCancelCcRequestLoading } = useCancelCcRequestMutation();

  const handleCancelRequest = async () => {
    try {
      await cancelRequest(data.user.phone);
      if (request?.creditclan_request_id) {
        await cancelCcRequest(request.creditclan_request_id);
      }
      // onDone();
      await queryClient.clear();
    } catch (e) {
      console.log({ e });
    }
  };

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
      {/* <Drawer isOpen={isOpen} onClose={onClose} title='Request Details'> */}
      {/* {!request?.eligibility_link && !request?.creditclan_request_id && (
          )} */}
      <>
        <p> You have an on-going request. <br /> Click on <b className='font-bold'>Continue</b> to proceed with your application. </p>
        <p>Contact us on our support lines if you require any assistance.</p>
      </>

      {/* {request?.eligibility_link && !request?.creditclan_request_id && (
        <>
          <p> You have an on-going request. <br /> Click on <b>Continue</b> to proceed with your application. </p>
          <p>Contact us on our support lines if you require any assistance.</p>
        </>
      )} */}

      {/* {request?.eligibility_link && request?.creditclan_request_id && (
        <p className=''>You have a pending request that is under review. <br /> Contact us on our support lines if you require any assistance.</p>
      )} */}

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
        {!request?.creditclan_request_id && (
          <Button onClick={handleCancelRequest} loading={isCancelRequestLoading} ></Button>
        )}
      </div>
      {/* </Drawer> */}
    </>
  )
}

export default ViewPropertyDetails;