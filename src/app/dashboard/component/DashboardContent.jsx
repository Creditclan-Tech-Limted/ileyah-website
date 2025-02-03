import {useCheckRentRequestMutation, useGetLoanDetailsQuery} from "@/api/rent";
import Loader from "@/global/Loader";
import useSignupStore from "@/store/signup";
import {IconExclamationCircle, IconHomeSearch} from "@tabler/icons-react";
import {formatCurrency} from "@/lib/utils";
import Button from "@/components/global/Button";
import Inspections from "@/app/dashboard/component/Inspections";
import CreditLimit from "@/app/dashboard/component/CreditLimit";
import DashboardActions from "@/app/dashboard/component/DashboardActions";
import ViewPropertyDetails from "@/app/dashboard/modals/ViewPropertyDetails";
import {useState} from "react";

const DashboardContent = () => {
  const {data, updateData} = useSignupStore((state) => state);
  const [openViewProperty, setOpenViewProperty] = useState(false);
  const {
    data: pendingRequest = [],
    isLoading: isCheckUserLoading
  } = useCheckRentRequestMutation({phone: data?.user?.phone});

  console.log({pendingRequest});

  const {data: loan = [], isLoading: isGetLoanDetailsLoading} =
    useGetLoanDetailsQuery({
      email: data?.user?.email,
      phone: data?.user?.phone,
      request_id: pendingRequest?.creditclan_request_id,
    });

  return (
    <div>
      <div className="h-screen flex">
        {isCheckUserLoading ? (
            <div className="my-auto mx-auto relative">
              <div
                role="status"
                className="space-y-2.5 animate-pulse max-w-lg relative"
              >
                <div className="relative flex items-center w-full space-x-2">
                  <div className="h-50 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                  <div className="h-50 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                  <div className="h-50 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                </div>
              </div>
              <Loader text="Loading..."/>
            </div>
          ) :
          <div className='w-full'>
            <div className="md:p-10 space-y-10">
              <div className="flex">
                <div>
                  <p className="text-2xl">
                    Welcome{" "}
                    <span className="font-semibold">{data?.user?.name}</span> 🥳
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-8 px-1">
                  Pending Rent Request
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-10 items-start w-full">
                  {!pendingRequest && (
                    <>
                      <div className="border p-10 rounded-xl">
                        <div className="flex flex-col">
                          <IconExclamationCircle className="mx-auto my-auto"/>
                          <p className="text-center mt-5">
                            No Pending Request Yet
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  {pendingRequest && (
                    <div className="grid border border-gray-300 rounded-xl overflow-hidden">
                      <div className="flex p-5  items-center ">
                        <div className="my-auto">
                          {" "}
                          <IconHomeSearch size={50}/>{" "}
                        </div>
                        <div className="px-5 overflow-hidden">
                          <p className="text-xl">
                            {pendingRequest?.address}
                          </p>
                          <div className="">
                            <p className=""> Gbagaga, Lagos</p>
                            <p>
                              {formatCurrency(
                                pendingRequest?.amount
                              )}
                            </p>
                          </div>
                        </div>
                        <Button
                          className="ml-auto"
                          onClick={() =>
                            setOpenViewProperty(true)
                          }
                        >
                          View
                        </Button>
                      </div>
                      <div>
                        <div className="w-full bg-gray-200 rounded-b-xl">
                          {!pendingRequest?.creditclan_request_id && (
                            <div
                              className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounede w-[33%] rounded-b-xl rounded-tr-xl">
                              {" "}
                              Stage 1 / 3
                            </div>
                          )}
                          {pendingRequest?.creditclan_request_id &&
                            loan &&
                            loan?.loan?.offers &&
                            parseFloat(
                              loan?.loan?.offers[0]?.amount
                            ) > 0 &&
                            loan?.loan?.loan_status !== "3" && (
                              <div
                                className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounede w-[67%] rounded-b-xl rounded-tr-xl">
                                {" "}
                                Stage 2 / 3
                              </div>
                            )}
                          {pendingRequest?.creditclan_request_id &&
                            loan &&
                            loan?.loan?.offers &&
                            parseFloat(
                              loan?.loan?.offers[0]?.amount
                            ) > 0 &&
                            loan?.loan?.loan_status === "3" && (
                              <div
                                className="bg-green-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounede w-[99%] rounded-b-xl rounded-tr-xl">
                                {" "}
                                Stage 3 / 3
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  )}
                  <CreditLimit data={data}/>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-10 items-start w-full">
                  <Inspections inspectionId={data?.user?.id}/>
                  <DashboardActions pendingRequest={pendingRequest} loan={loan}/>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <ViewPropertyDetails
        isOpen={openViewProperty}
        request={pendingRequest}
        loan={loan}
        onClose={() => setOpenViewProperty(false)}
      />
    </div>
  )
}

export default DashboardContent;