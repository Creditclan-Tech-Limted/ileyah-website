import {IconExclamationCircle, IconHomeSearch} from "@tabler/icons-react";
import {formatCurrency} from "@/lib/utils";
import Button from "@/components/global/Button";
import {useGetInspectionDetails} from "@/api/rent";

const Inspections = ({inspectionId}) => {
  const {
    data: inspections = [],
    isLoading: isGetInspectionsLoading
  } = useGetInspectionDetails({landlordAgentId: inspectionId});

  return (
    <div>
      <h3 className="text-xl font-medium mb-8 px-1 mt-16">
        {" "}
        Inspection Bookings{" "}
      </h3>
      {inspections && inspections.length ? (
          <>
            <div className="border border-gray-300 py-2  rounded-xl divide-y divide-gray-300 ">
              {inspections?.map((m, i) => (
                <>
                  <div className="flex py-4 px-8">
                    <div className="flex">
                      <div className="my-auto mr-5">
                        {" "}
                        <IconHomeSearch
                          size={30}
                          className="text-cyan-600"
                        />{" "}
                      </div>
                      <div>
                        <p className="mb-3">
                          {m?.property?.description}
                        </p>
                        <p className="font-bold">
                          {formatCurrency(m?.property?.price)}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="ml-auto my-auto"
                      variant="outlined"
                      color="black"
                      onClick={() => {
                        setCurrent(m);
                        setopenViewInspections(true);
                      }}
                    >
                      View
                    </Button>
                  </div>
                </>
              ))}
            </div>
            <div className="underline text-blue-500 mt-5 cursor-pointer text-right">
              See all Bookings
            </div>
          </>
        ) :
        <>
          <div className="border p-10 rounded-xl">
            <div className="flex flex-col">
              <IconExclamationCircle className="mx-auto my-auto"/>
              <p className="text-center mt-5">
                No Pending Inspections{" "}
              </p>
            </div>
          </div>
        </>
      }
    </div>
  );
};

export default Inspections;