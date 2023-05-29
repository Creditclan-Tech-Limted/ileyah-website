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
          <div className="d-flex flex-column justify-content-center align-items-center text-center py-5">
            <div className="spinner-grow text-dark" role="status">
              <span className="sr-only">Loading...</span>
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
                  <div className="d-flex flex-column justify-content-center align-items-center text-center py-5">
                    <div className="spinner-grow text-dark" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                    <div className="font-17 mt-4">Please wait..</div>
                  </div>
                </>
              ) : (
                <>
                  <div className="pt-5 pb-3">
                    <h2 className="font-weight-bold font-30 redirect-text text-deep-blue">
                      Request details
                    </h2>
                  </div>
                  <div className="font-17">
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Rent amount:
                        <span className="font-weight-600 text-right">
                          {formatCurrency(request.amount ?? 0)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Type of house:
                        <span className="font-weight-600 text-right">
                          {capitalizeFirstLetter(request.house_type)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Address:
                        <span className="font-weight-600 text-right">
                          {request.address}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Landlord phone number:
                        <span className="font-weight-600 text-right">
                          {request.landlord_phone || "Not provided"}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="font-17 mt-4">
                    {isLoanDetailsRefetching && !isGetLoanDetailsLoading && (
                      <div className="d-flex align-items-center mb-4">
                        <div
                          className="spinner-grow spinner-grow-sm mr-2"
                          role="status"
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                        Refreshing..
                      </div>
                    )}
                    {isGetLoanDetailsLoading ? (
                      <div className="font-17 mt-4">
                        Fetching eligibility status..
                      </div>
                    ) : (
                      <>
                        {loan ? (
                          <>
                            {loan.loan.stage === "completed" && (
                              <div className="alert alert-info">
                                Your request is under review
                              </div>
                            )}
                            {loan.loan.stage !== "completed" && (
                              <div className="alert alert-warning">
                                Eligibility pending
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="alert alert-danger">
                            Eligibility not done
                          </div>
                        )}
                        <div className="d-flex flex-column justify-content-between align-items-center mt-4">
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
                                  className="btn btn-block btn-blue-full"
                                >
                                  Get funded
                                </button>
                              </LaunchEligibilityWidget>
                            </ClientOnly>
                          )}
                          {request.approval_step === "0" && (
                            <button
                              onClick={() => onNext("cancel-request")}
                              type="submit"
                              className="btn btn-block btn-outline-gray btn-xs mt-3"
                            >
                              Cancel request
                            </button>
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
