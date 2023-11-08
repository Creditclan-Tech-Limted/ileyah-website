'use client'
import { useState } from "react";
import LaunchEligibilityWidget from "./LaunchEligibilityWidget.jsx";
import useSignupStore from "@/store/signup.js";
import { useCheckRentRequestQuery, useGetLoanDetailsQuery } from "@/api/rent.js";
import { capitalizeFirstLetter, formatCurrency } from "@/lib/utils.js";
import ClientOnly from "../ClientOnly.jsx";

const RequestDetails = ({ onNext }) => {
  const { data, updateData } = useSignupStore((state) => state);
  const [loading, setLoading] = useState("false");
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
    email: data.user.email,
    phone: data.user.phone,
    request_id: request?.creditclan_request_id,
  });

  console.log({ isGetLoanDetailsLoading });

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
      {isRentRequestLoading ? (
        <>
          <br />
          <br />
          <br />
          <br />
          <div className="flex flex-column justify-center items-center text-center py-5">
            <div
              className="inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
              role="status">
              <span
                className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
              >
            </div>
            <div className="font-17 mt-4">Please wait..</div>
          </div>
        </>
      ) : (
        <>
          {!!request && (
            <>
              {loading === "true" ? (
                <>
                  <br />
                  <br />
                  <br />
                  <br />
                  <div className="flex flex-column justify-center items-center text-center py-5">
                    <div className="spinner-grow text-black" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <div className="font-17 mt-4">Please wait..</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="pt-5 pb-3">
                    <h2 className="font-bold font-30 redirect-text text-deep-blue">
                      Request details
                    </h2>
                  </div>
                  <div className="font-17 border border-black my-10 rounded p-5">
                    <ul className=" space-y-6">
                      <li className="flex justify-between items-center">
                        Rent :
                        <span className=" text-right">
                          {formatCurrency(request.amount ?? 0)}
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        Type of house:
                        <span className="text-right">
                          {capitalizeFirstLetter(request.house_type)}
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        Address:
                        <span className="text-right">
                          {request.address}
                        </span>
                      </li>
                      <li className="flex justify-between items-center">
                        Landlord phone number:
                        <span className="text-right">
                          {request.landlord_phone || "Not provided"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="font-17 mt-4">
                    {isLoanDetailsRefetching && !isGetLoanDetailsLoading && (
                      <div className="flex items-center mb-4">
                        <div
                          className="spinner-grow spinner-grow-sm mr-2"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                        Refreshing..
                      </div>
                    )}
                    {isRentRequestLoading ? (
                      <div className="font-17 mt-4">
                        Fetching eligibility status..
                      </div>
                    ) :
                      (
                        <>
                          {loan ? (
                            <>
                              {loan.loan.stage === "completed" && (
                                <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                  <p>Your request is under review.</p>
                                </div>
                              )}
                              {loan.loan.stage !== "completed" && (
                                <div className="flex items-center bg-yellow-100 text-white text-sm font-bold px-4 py-3" role="alert">
                                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                                  <p>Eligibility pending.</p>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="flex items-center rounded bg-red-400 text-white text-sm font-bold px-4 py-3" role="alert">
                              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                              <p className="text-white">Eligibility not done.</p>
                            </div>
                          )}
                          <div className="mt-10">
                            {loan?.loan?.stage !== "completed" && (
                              <ClientOnly>
                                <LaunchEligibilityWidget
                                  onReady={() => setLoading("false")}
                                  request={request}
                                  onCancel={handleEligibilityCancelled}
                                  onCompleted={handleEligibilityCompleted}
                                  className="w-100"
                                >
                                  <button
                                    onClick={() => setLoading("true")}
                                    className="btn btn-block btn-blue-full w-full"
                                  >
                                    Get funded
                                  </button>
                                </LaunchEligibilityWidget>
                              </ClientOnly>
                            )}
                            {request.approval_step === "0" && (
                              <div className="mt-2 text-lg">
                                Wanna to start over? <span className="text-red-500 cursor-pointer" onClick={() => onNext("cancel-request")}>Cancel Request</span>
                              </div>
                            )}
                          </div>
                        </>
                      )}
                  </div>
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default RequestDetails;
