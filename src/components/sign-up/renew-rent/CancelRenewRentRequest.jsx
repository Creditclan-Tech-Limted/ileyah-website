import { useCancelCcRequestMutation, useCancelRequestMutation } from '@/api/rent';
import useSignupStore from '@/store/signup';
import React from 'react'
import { useQueryClient } from "react-query";
// import { useCancelCcRequestMutation, useCancelRequestMutation, } from "../../../api/rent.js";
// import useSignupStore from '../../../store/signup.js';


function CancelRenewRentRequest({ onBack, onNext }) {
  const queryClient = useQueryClient();
  const data = useSignupStore(state => state.data);
  const { mutateAsync: cancelRequest, isLoading: isCancelRequestLoading } = useCancelRequestMutation();
  const { mutateAsync: cancelCcRequest, isLoading: isCancelCcRequestLoading } = useCancelCcRequestMutation();

  const handleCancelRequest = async () => {
    try {
      await cancelRequest(data.user.phone);
      if (data?.data?.request?.creditclan_request_id) {
        await cancelCcRequest(data.data.request.creditclan_request_id);
      }
      onNext();
      await queryClient.clear();
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <>
      <div className="pt-70">
        <img style={ { width: "400px" } } src="/assets/images/Startled-bro.svg" alt=""/>
        <p className="mb-4 redirect-text text-deep-blue font-weight-bold font-22">
            You are about to cancel existing rent request. Do you wish to continue?
          </p>
        <div className="flex items-center">
          <button
            onClick={ handleCancelRequest } className="flex items-center px-5 btn btn-outline-gray"
            disabled={ (isCancelRequestLoading || isCancelCcRequestLoading) }
          >
            { (isCancelRequestLoading || isCancelCcRequestLoading) ? 'Cancelling' : 'Yes, cancel' }
            { (isCancelRequestLoading || isCancelCcRequestLoading) && (
              <span className="ml-3 spin"><i className="fa-solid fa-spinner"></i></span>
            ) }
          </button>
          <button onClick={ onBack } className="px-5 btn btn-blue-full ml-4">
            No
          </button>
        </div>
      </div>
    </>
  )
}

export default CancelRenewRentRequest
