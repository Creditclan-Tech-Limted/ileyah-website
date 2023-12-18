import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IconChevronRight, IconHeadset, IconHomeHand, IconHomeSearch, IconRotate2, IconSearch } from "@tabler/icons-react";
import Link from "next/link";

function MenuView({ onNext, handleToggle }) {
  return (
    <>
      <div className="position-relative">
        <button
          style={{ marginBottom: "0px" }}
          className="x sidebarCollapse"
          type="button"
          onClick={handleToggle}
        >
          <span aria-hidden="true">
            <i
              style={{ fontSize: "1rem !important" }}
              className="fa-solid fa-x"
            ></i>
          </span>
        </button>
      </div>
      <div className="pt-70">
        <p className="font-bold text-3xl text-deep-blue leading-[1.1]">
          Pay your rent in monthly subscriptions forever.
        </p>
        <p className="text-cc-dark mt-2">
          Please choose a rent now pay later option
        </p>
      </div>
      <div className="space-y-4 mt-10">
        <Link href='/listings'>
          <div
            // onClick={() => onNext("renew-rent")}
            className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
          >
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center">
                <IconHomeSearch size="20" />
              </div>
            </div>
            <div className="px-6">
              <p className="text-lg font-medium text-left">
                Browse Rental Listings across your region
              </p>
              <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
                Browse 1000+ subscription tenancy
                {/* Renew your house rent on a monthly basis while we handle the full payment */}
              </p>
            </div>
            <div>
              <IconChevronRight className="text-black" size="20" />
            </div>
          </div>
        </Link>
        <div
          // onClick={() => onNext("renew-rent")}
          onClick={ () => onNext("found-house") }
          className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-red-600 text-white grid place-items-center">
              <IconRotate2 size="20" />
            </div>
          </div>
          <div className="px-6">
            <p className="text-lg font-medium text-left">
              Renew rent
            </p>
            <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
              Renew your house rent on a monthly basis while we handle the full payment
            </p>
          </div>
          <div>
            <IconChevronRight className="text-black" size="20" />
          </div>
        </div>
        {/* <div
          onClick={ () => onNext("found-house") }
          className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center">
              <IconHomeHand size="20"/>
            </div>
          </div>
          <div className="px-6">
            <p className="text-lg font-medium text-left">
              I found a house
            </p>
            <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
              Renew your house rent on a monthly basis while we handle the full payment
            </p>
          </div>
          <div>
            <IconChevronRight className="text-black" size="20"/>
          </div>
        </div> */}
        <div
          // onClick={() => onNext("find-house")}
          className="rounded-2xl flex items-center border border-gray-300 px-7 py-5 cursor-pointer hover:bg-gray-100"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-green-600 text-white grid place-items-center">
              <IconHeadset size="20" />
            </div>
          </div>
          <div className="px-6">
            <p className="text-lg font-medium text-left">
              Talk to an advisor
            </p>
            <p className="text-left mt-0.5 opacity-75 text-[.95rem] leading-snug">
              Renew your house rent on a monthly basis while we handle the full payment
            </p>
          </div>
          <div>
            <IconChevronRight className="text-black" size="20" />
          </div>
        </div>
      </div>
      {/* <div className="mt-6">
        <p className="font-medium cursor-pointer">
          Already have an account? <a onClick={() => onNext("user-details")} className='text-blue-500'>
            Check request
          </a>
        </p>
      </div> */}
    </>
  );
}

export default MenuView;
