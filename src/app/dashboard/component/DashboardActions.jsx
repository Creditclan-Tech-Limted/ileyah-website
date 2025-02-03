import {IconChevronRight, IconHeadset, IconHomeHand, IconHomeSearch} from "@tabler/icons-react";
import {useState} from "react";
import ViewPropertyDetails from "@/app/dashboard/modals/ViewPropertyDetails";
import RenewRentDashboard from "@/app/dashboard/(renew-rent)/renew-rent/page";
import Support from "@/app/listings/components/Support";

const DashboardActions = ({pendingRequest, loan}) => {
  const [openViewProperty, setOpenViewProperty] = useState(false);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);

  return (
    <div className="mt-3">
      <div className="rounded-2xl flex items-start  border-b px-7 py-7 cursor-pointer hover:bg-gray-100">
        <div className="text-red-600 grid place-items-center mt-1">
          <IconHomeSearch size="32"/>
        </div>
        <div className="px-6">
          <p className="text-lg font-medium text-left">
            Browse Listings
          </p>
          <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
            Renew your house rent on a monthly basis while
            we handle the full payment
          </p>
        </div>
        <div className="my-auto">
          <IconChevronRight
            className="text-black"
            size="20"
          />
        </div>
      </div>
      <div
        className="rounded-2xl flex items-start  border-b px-7 py-7 cursor-pointer hover:bg-gray-100"
        onClick={() => {
          if (pendingRequest) {
            setOpenViewProperty(true);
          } else {
            setIsOpenDrawer(true);
          }
        }}
      >
        <div className="text-blue-600 grid place-items-center mt-1">
          <IconHomeHand size="32"/>
        </div>
        <div className="px-6">
          <p className="text-lg font-medium text-left">
            I found a house
          </p>
          <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
            Renew your house rent on a monthly basis while
            we handle the full payment
          </p>
        </div>
        <div className="my-auto">
          <IconChevronRight
            className="text-black"
            size="20"
          />
        </div>
      </div>
      <div
        className="rounded-2xl flex items-start border-b px-7 py-7 cursor-pointer hover:bg-gray-100"
        onClick={() => {
          setOpenSupport(true)
        }}
      >
        <div className="text-green-600 grid place-items-center mt-1">
          <IconHeadset size="32"/>
        </div>
        <div className="px-6">
          <p className="text-lg font-medium text-left">
            Talk to Advisor
          </p>
          <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
            Renew your house rent on a monthly basis while
            we handle the full payment
          </p>
        </div>
        <div className="my-auto">
          <IconChevronRight
            className="text-black"
            size="20"
          />
        </div>
      </div>

      <ViewPropertyDetails
        isOpen={openViewProperty}
        request={pendingRequest}
        loan={loan}
        onClose={() => setOpenViewProperty(false)}
      />

      <RenewRentDashboard
        isOpenDrawer={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      />

      <Support isOpen={openSupport} onClose={() => setOpenSupport(false)}/>
    </div>

  )
}

export default DashboardActions;